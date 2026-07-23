#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const candidates = [
  path.join(root, 'node_modules', '.bin', 'cap'),
  path.join(root, 'node_modules', '.bin', 'capacitor'),
  path.join(root, 'node_modules', '@capacitor', 'cli', 'bin', 'capacitor')
];

for (const file of candidates) {
  if (fs.existsSync(file)) {
    try {
      fs.chmodSync(file, 0o755);
    } catch (error) {
      // Ignore permission errors on platforms where chmod is unsupported.
    }
  }
}
