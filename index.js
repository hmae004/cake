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

const getPullRequests = async () => {
    try {
    const response = await axios.get(`https://api.github.com/repos/${OWNER}/${REPO}/pulls`, {
        headers: { Authorization: `token ${GITHUB_TOKEN}` },
    });
    console.log('Open PRs:', response.data.map(pr => pr.title));
    } catch (err) {
    console.error(err);
    }
};
  
getPullRequests();
