#!/usr/bin/env node
const { rimrafSync } = require('rimraf');

if (process.env.npm_execpath == null || !process.env.npm_execpath.endsWith('yarn.js')) {
  return true;
}

// yarn will run yarn in node_modules for its dependency
if (process.env.PWD == null || process.env.PWD.includes('node_modules')) {
  return true;
}

rimrafSync('node_modules');
rimrafSync('yarn.lock')
throw 'This package has been migrated to pnpm, please use pnpm instead of yarn.';
