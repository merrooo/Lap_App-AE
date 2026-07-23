#!/usr/bin/env node
const { spawnSync } = require('child_process');
const path = require('path');

const cliPath = path.resolve(__dirname, '..', 'node_modules', '@capacitor', 'cli', 'bin', 'capacitor');
const result = spawnSync(process.execPath, [cliPath, ...process.argv.slice(2)], {
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
