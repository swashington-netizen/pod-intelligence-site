/**
 * Canvas Content Normalizer
 *
 * Pure function that transforms raw Slack Canvas markdown/text into the
 * structured JSONB content format defined in the database schema.
 *
 * This is a pure function with no side effects - no database calls, no I/O.
 * Makes it easily unit-testable.
 */

/**
 * Normalize raw canvas text into structured content
 *
 * @param {string} rawCanvasText - Raw markdown/text from Slack Canvas
 * @param {object} existingContent - Existing content object (for fallback)
 * @returns {object} Normalized content object matching JSONB schema
 */
function normalize(rawCanvasText, existingContent = {}) {
  if (!rawCanvasText || typeof rawCanvasText !== 'string') {
    return existingContent;
  }

  const content = { ...existingContent };
  const lines = rawCanvasText.split('\n').map(line => line.trim());

  // Parse content by sections
  let currentSection = null;
  let sectionLines = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Check for section headers (## Heading)
    if (line.startsWith('## ')) {
      // Process previous section if any
      if (currentSection && sectionLines.length > 0) {
        processSection(currentSection, sectionLines, content);
      }

      // Start new section
      currentSection = line.substring(3).trim().toLowerCase();
      sectionLines = [];
    } else if (line.length > 0) {
      // Add non-empty lines to current section
      sectionLines.push(line);
    }
  }

  // Process final section
  if (currentSection && sectionLines.length > 0) {
    processSection(currentSection, sectionLines, content);
  }

  // Add metadata
  content.lastEditedAt = new Date().toISOString();

  return content;
}

/**
 * Process a section and update the content object
 *
 * @param {string} sectionName - Name of the section (mission, initiatives, etc.)
 * @param {array} lines - Lines of content for this section
 * @param {object} content - Content object to update
 */
function processSection(sectionName, lines, content) {
  switch (sectionName) {
    case 'mission':
      content.mission = processMission(lines);
      break;

    case 'initiatives':
      content.initiatives = parseInitiatives(lines);
      break;

    case 'metrics':
      content.metrics = parseMetrics(lines);
      break;

    case 'next steps':
      content.nextSteps = parseNextSteps(lines);
      break;

    case 'sources':
      content.sources = parseSources(lines);
      break;

    default:
      // Ignore unknown sections
      break;
  }
}

/**
 * Process mission text (simple concatenation)
 */
function processMission(lines) {
  return lines.join(' ').trim();
}

/**
 * Parse initiatives table
 *
 * Expected format (pipe-delimited):
 * Name | Status | Owner | Target Date
 * Initiative 1 | On Track | John Doe | 2026-08-15
 * Initiative 2 | At Risk | Jane Smith | 2026-09-30
 *
 * @param {array} lines - Table lines
 * @returns {array} Array of initiative objects
 */
function parseInitiatives(lines) {
  const initiatives = [];

  for (let line of lines) {
    // Skip table headers and separator lines
    if (line.includes('---') || line.toLowerCase().includes('name') && line.includes('status')) {
      continue;
    }

    // Parse pipe-delimited table row
    if (line.includes('|')) {
      const parts = line.split('|').map(p => p.trim());

      if (parts.length >= 4) {
        initiatives.push({
          name: parts[0],
          status: normalizeStatus(parts[1]),
          owner: parts[2],
          targetDate: parts[3]
        });
      }
    }
  }

  return initiatives;
}

/**
 * Parse metrics
 *
 * Expected format (pipe-delimited):
 * Value | Label | So What
 * 23% | Pipeline Velocity | Deals moving faster
 * $2.4M | Additional ARR | Incremental revenue
 *
 * @param {array} lines - Metric lines
 * @returns {array} Array of metric objects
 */
function parseMetrics(lines) {
  const metrics = [];

  for (let line of lines) {
    // Skip table headers and separator lines
    if (line.includes('---') || line.toLowerCase().includes('value') && line.includes('label')) {
      continue;
    }

    // Parse pipe-delimited metrics
    if (line.includes('|')) {
      const parts = line.split('|').map(p => p.trim());

      if (parts.length >= 3) {
        metrics.push({
          value: parts[0],
          label: parts[1],
          soWhat: parts[2]
        });
      }
    }
  }

  return metrics;
}

/**
 * Parse next steps (bulleted or numbered list)
 *
 * Expected format:
 * - Step 1
 * - Step 2
 * or
 * 1. Step 1
 * 2. Step 2
 *
 * @param {array} lines - Next steps lines
 * @returns {array} Array of next step strings
 */
function parseNextSteps(lines) {
  const steps = [];

  for (let line of lines) {
    // Remove list markers (-, *, 1., 2., etc.)
    let cleaned = line.replace(/^[-*]\s+/, '').replace(/^\d+\.\s+/, '').trim();

    if (cleaned.length > 0) {
      steps.push(cleaned);
    }
  }

  return steps;
}

/**
 * Parse sources (bulleted or numbered list)
 *
 * @param {array} lines - Source lines
 * @returns {array} Array of source strings
 */
function parseSources(lines) {
  const sources = [];

  for (let line of lines) {
    // Remove list markers
    let cleaned = line.replace(/^[-*]\s+/, '').replace(/^\d+\.\s+/, '').trim();

    if (cleaned.length > 0) {
      sources.push(cleaned);
    }
  }

  return sources;
}

/**
 * Normalize status strings to standard values
 *
 * @param {string} status - Raw status string
 * @returns {string} Normalized status
 */
function normalizeStatus(status) {
  const normalized = status.toLowerCase().trim();

  if (normalized.includes('complete') || normalized.includes('done')) {
    return 'Complete';
  } else if (normalized.includes('block')) {
    return 'Blocked';
  } else if (normalized.includes('risk')) {
    return 'At Risk';
  } else if (normalized.includes('track') || normalized.includes('progress')) {
    return 'On Track';
  }

  // Default to the original status if no match
  return status;
}

module.exports = { normalize };
