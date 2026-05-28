#!/usr/bin/env node
// Wrapper for Prettier so a single npm script handles both cases:
//   npm run format            → defaults to "." (whole project)
//   npm run format file1 ...  → processes only the passed files
// Necessary because Prettier has no built-in "default to all when no file args".
import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const prettierBin = require.resolve('prettier/bin/prettier.cjs');

const args = process.argv.slice(2);
const hasFileArg = args.some((a) => !a.startsWith('-'));
const finalArgs = hasFileArg ? args : [...args, '.'];

const child = spawn(process.execPath, [prettierBin, ...finalArgs], { stdio: 'inherit' });
child.on('exit', (code) => process.exit(code ?? 1));
