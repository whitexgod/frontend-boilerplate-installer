#!/usr/bin/env node

const simpleGit = require("simple-git");
const path = require("path");
const fs = require("fs");
const rimraf = require("rimraf");

const repoUrl = "https://github.com/whitexgod/Frontend-Skeleton-Setup.git";
const targetPath = process.cwd();

const cloneRepo = async () => {
  try {
    if (fs.existsSync(path.join(targetPath, ".git"))) {
      console.log("Project already initialized.");
    } else {
      console.log("Cloning repository...");
      await simpleGit().clone(repoUrl, targetPath);
      console.log("Repository cloned successfully.");

      // Remove the .git directory to disconnect from the original repo
      rimraf(path.join(targetPath, ".git"), (err) => {
        if (err) {
          console.error("Failed to remove .git directory:", err);
        } else {
          console.log(
            ".git directory removed. Disconnected from the original repository."
          );
        }
      });
    }
  } catch (err) {
    console.error("Failed to clone repository:", err);
  }
};

cloneRepo();
