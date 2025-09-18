# Test Automated PR Creation (Updated)

This is a test file to demonstrate the automated PR workflow:

1. Push to `dev` branch
   - Automatically creates PR: dev → release

2. After merging to `release`
   - Automatically creates PR: release → master

This helps maintain a clean promotion path:
dev → release → master
