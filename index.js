#!/usr/bin/env node

const simpleGit = require('simple-git');
const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

const repoUrl = 'https://github.com/whitexgod/frontend-skeleton-setup.git';  // Replace with your repo URL
const targetPath = process.cwd();

const cloneRepo = async () => {
  try {
    console.log('Cloning repository...');
    await simpleGit().clone(repoUrl, targetPath);
    console.log('Repository cloned successfully.');

    // Remove the .git directory to disconnect from the original repo
    rimraf(path.join(targetPath, '.git'), (err) => {
      if (err) {
        console.error('Failed to remove .git directory:', err);
      } else {
        console.log('.git directory removed. Disconnected from the original repository.');
      }
    });
  } catch (err) {
    console.error('Failed to clone repository:', err);
  }
};

cloneRepo();
