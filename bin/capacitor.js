#!/usr/bin/env node
const { spawnSync } = require('child_process');
const path = require('path');

const entry = path.resolve(__dirname, '..', 'scripts', 'cap.js');
const result = spawnSync(process.execPath, [entry, ...process.argv.slice(2)], {
  stdio: 'inherit',
  env: process.env,
});

if (typeof result.status === 'number') {
  process.exit(result.status);
}

if (result.error) {
  console.error(result.error.message);
  process.exit(1);
}

process.exit(1);
