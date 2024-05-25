const simpleGit = require('simple-git');
const path = require('path');
const fs = require('fs');

const repoUrl = 'https://github.com/whitexgod/Frontend-Skeleton-Setup.git';  
const targetPath = process.cwd();

const cloneRepo = async () => {
  try {
    if (fs.existsSync(path.join(targetPath, '.git'))) {
      console.log('Project already initialized.');
    } else {
      console.log('Cloning repository...');
      await simpleGit().clone(repoUrl, targetPath);
      console.log('Repository cloned successfully.');
    }
  } catch (err) {
    console.error('Failed to clone repository:', err);
  }
};

cloneRepo();
