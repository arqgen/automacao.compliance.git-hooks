const fs = require('fs');
const path = require('path');

const branchName = getCurrentBranchName();

const isValidBranchName = branchName === "main" || branchName === "beta" || branchName === "production" || /^(feature|bugfix|improvement)\/.{2,7}-\d{2,7}-.+$/.test(branchName);

if (!isValidBranchName) {
  console.error('Error: Branch name must start with feature/bugfix/improvement and have the task id like: feature/AQG-1234-test-branch-name');
  process.exit(1);
}

function getCurrentBranchName() {
  const headPath = path.resolve('.git', 'HEAD');
  const headContent = fs.readFileSync(headPath, 'utf-8').trim();

  const branchMatch = headContent.match(/^ref: refs\/heads\/(.+)$/);

  if (branchMatch && branchMatch[1]) {
    return branchMatch[1];
  } else {
    console.error('Error: Unable to determine the current branch.');
    process.exit(1);
  }
}

