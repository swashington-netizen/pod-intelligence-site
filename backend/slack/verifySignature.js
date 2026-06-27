/**
 * Slack Request Signature Verification Middleware
 *
 * Verifies that incoming requests to /slack/events are actually from Slack
 * by validating the X-Slack-Signature header using HMAC-SHA256.
 *
 * Also handles the URL verification challenge that Slack sends during app setup.
 *
 * Reference: https://api.slack.com/authentication/verifying-requests-from-slack
 */

const crypto = require('crypto');

/**
 * Middleware to verify Slack request signatures
 */
function verifySignature(req, res, next) {
  const slackSigningSecret = process.env.SLACK_SIGNING_SECRET;

  if (!slackSigningSecret) {
    console.error('SLACK_SIGNING_SECRET is not set in environment variables');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  // Handle URL verification challenge (sent by Slack during app setup)
  // This must happen BEFORE signature verification because the challenge
  // request doesn't include a valid signature yet
  if (req.body && req.body.type === 'url_verification') {
    console.log('Received URL verification challenge from Slack');
    return res.status(200).json({ challenge: req.body.challenge });
  }

  // Extract signature components from headers
  const slackSignature = req.headers['x-slack-signature'];
  const slackTimestamp = req.headers['x-slack-request-timestamp'];

  if (!slackSignature || !slackTimestamp) {
    console.warn('Missing Slack signature headers');
    return res.status(401).json({ error: 'Missing signature headers' });
  }

  // Prevent replay attacks - reject requests older than 5 minutes
  const currentTime = Math.floor(Date.now() / 1000);
  if (Math.abs(currentTime - slackTimestamp) > 60 * 5) {
    console.warn('Slack request timestamp is too old');
    return res.status(401).json({ error: 'Request timestamp too old' });
  }

  // Compute the expected signature
  // Format: v0:timestamp:body
  const sigBasestring = `v0:${slackTimestamp}:${req.rawBody}`;
  const expectedSignature = 'v0=' + crypto
    .createHmac('sha256', slackSigningSecret)
    .update(sigBasestring, 'utf8')
    .digest('hex');

  // Compare signatures using timing-safe comparison
  const isValid = crypto.timingSafeEqual(
    Buffer.from(slackSignature),
    Buffer.from(expectedSignature)
  );

  if (!isValid) {
    console.warn('Invalid Slack signature - request rejected');
    return res.status(401).json({ error: 'Invalid signature' });
  }

  // Signature is valid - proceed to event handler
  console.log('✓ Slack signature verified successfully');
  next();
}

module.exports = verifySignature;
