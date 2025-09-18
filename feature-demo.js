// Feature Demo
const demoFeature = {
  name: 'Automated PR Demo',
  description: 'Demonstrates the flow: dev → release → main',
  steps: [
    'Push to dev branch',
    'Automated PR created: dev → release',
    'Merge PR to release',
    'Automated PR created: release → main',
    'Merge PR to main'
  ],
  version: '1.0.0',
  timestamp: new Date().toISOString()
};

module.exports = demoFeature;
