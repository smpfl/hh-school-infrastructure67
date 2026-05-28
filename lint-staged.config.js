// lint-staged appends matched file paths to each string command;
// for the typecheck step we return a fixed command so files are NOT appended —
// `tsc --noEmit <file>` would ignore tsconfig.json, so type checks must always
// run on the whole project.
export default {
  '*.{js,jsx,ts,tsx}': ['npm run lint:fix', 'npm run format', () => 'npm run typecheck'],
  '*.{json,md,css,html,yml,yaml}': ['npm run format'],
};
