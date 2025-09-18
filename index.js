
const express = require('express');
const app = express();
const PORT = 3001;

require('dotenv').config();
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const OWNER = process.env.OWNER;
const REPO = process.env.REPO;


app.get('/', (req, res) => {
  res.send('Cake backend is alive!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get('/login', (req, res) => {
    res.send('This will be your GitHub login route soon!');
  });

const axios = require('axios');

const BRANCH_FLOW = {
    dev: ['feature/*'],           // development branches
    release: ['release/*'],       // release branches
    production: ['main', 'master'] // production branches
  };

const matchesBranch = (branch, patterns) => {
    return patterns.some(pattern => {
      const regex = new RegExp('^' + pattern.replace('*', '.*') + '$');
      return regex.test(branch);
    });
};
  
const mapStage = (pr) => {
    const targetBranch = pr.base.ref;
  
    if (pr.merged_at) {
      if (matchesBranch(targetBranch, BRANCH_FLOW.production)) return 'Production';
      if (matchesBranch(targetBranch, BRANCH_FLOW.release)) return 'Release';
    } else if (pr.requested_reviewers.length > 0) {
      return 'Review';
    } else {
      return 'Dev';
    }
  };
  
const getPullRequests = async () => {
    try {
        const response = await axios.get(`https://api.github.com/repos/${OWNER}/${REPO}/pulls`, {
            headers: { Authorization: `token ${GITHUB_TOKEN}` },
        });

        // Map each PR to its stage
        response.data.forEach(pr => {
            const stage = mapStage(pr);  // <-- call the function here
            console.log(`${pr.title} → ${stage}`);
        });

    } catch (err) {
        console.error(err);
    }
};

console.log('Getting PRs...');
  
getPullRequests();
