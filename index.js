#!/usr/bin/env node

const simpleGit = require('simple-git');
const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

const repoUrl = 'https://github.com/whitexgod/frontend-skeleton-setup.git';  // Replace with your repo URL
const targetPath = process.cwd();

const deleteFolderRecursive = (folderPath) => {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file) => {
      const currentPath = path.join(folderPath, file);
      if (fs.lstatSync(currentPath).isDirectory()) {
        deleteFolderRecursive(currentPath);
      } else {
        fs.unlinkSync(currentPath);
      }
    });
    fs.rmdirSync(folderPath);
  }
};

const cloneRepo = async () => {
  try {
    console.log('Cloning repository...');
    await simpleGit().clone(repoUrl, targetPath);
    console.log('Repository cloned successfully.');

    const gitPath = path.join(targetPath, '.git');

    if (fs.existsSync(gitPath)) {
      deleteFolderRecursive(gitPath);
      console.log('.git directory removed. Disconnected from the original repository.');
    } else {
      console.log('.git directory does not exist.');
    }
  } catch (err) {
    console.error('Failed to clone repository:', err);
  }
};

cloneRepo();
