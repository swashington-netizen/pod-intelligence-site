// Configuration for all pods in the Agentic Sales Productivity portal
// This structure makes it easy to reorder, add, or remove pods later

export const pods = [
  {
    id: 'ris',
    name: 'SMB Revenue Orchestration',
    shortName: 'RIS',
    description: 'Revenue intelligence and orchestration for SMB sales teams',
    status: 'critical',
    priority: 1,
    owner: 'TBD',
    color: '#0176D3', // Salesforce blue
    keyInitiatives: [
      'Revenue pipeline optimization',
      'Deal acceleration workflows',
      'Sales forecasting automation'
    ]
  },
  {
    id: 'pod-2',
    name: 'Pod Name 2',
    shortName: 'POD2',
    description: 'Description for pod 2',
    status: 'active',
    priority: 2,
    owner: 'TBD',
    color: '#00A1E0',
    keyInitiatives: []
  },
  {
    id: 'pod-3',
    name: 'Pod Name 3',
    shortName: 'POD3',
    description: 'Description for pod 3',
    status: 'active',
    priority: 3,
    owner: 'TBD',
    color: '#16325C',
    keyInitiatives: []
  },
  {
    id: 'pod-4',
    name: 'Pod Name 4',
    shortName: 'POD4',
    description: 'Description for pod 4',
    status: 'active',
    priority: 4,
    owner: 'TBD',
    color: '#706E6B',
    keyInitiatives: []
  },
  {
    id: 'pod-5',
    name: 'Pod Name 5',
    shortName: 'POD5',
    description: 'Description for pod 5',
    status: 'planning',
    priority: 5,
    owner: 'TBD',
    color: '#54698D',
    keyInitiatives: []
  },
  {
    id: 'pod-6',
    name: 'Pod Name 6',
    shortName: 'POD6',
    description: 'Description for pod 6',
    status: 'planning',
    priority: 6,
    owner: 'TBD',
    color: '#032D60',
    keyInitiatives: []
  }
];

// Status configuration for consistent display
export const statusConfig = {
  critical: {
    label: 'Critical',
    color: '#C23934',
    backgroundColor: '#FED8D7'
  },
  active: {
    label: 'Active',
    color: '#027E46',
    backgroundColor: '#D4EDDA'
  },
  planning: {
    label: 'Planning',
    color: '#706E6B',
    backgroundColor: '#F3F2F2'
  }
};

// Helper function to get pod by ID
export const getPodById = (id) => pods.find(pod => pod.id === id);

// Helper function to get featured pod (RIS)
export const getFeaturedPod = () => pods.find(pod => pod.status === 'critical');
