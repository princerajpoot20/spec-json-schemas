import glob from 'glob';
const glob = require('glob');
import { execSync } from 'child_process';

glob('schemas/**/*.json', (err, files) => {
  if (err) {
    console.error('Error finding files:', err);
    process.exit(1);
  }

  files.forEach((file) => {
    try {
      execSync(`jsonlint ${file}`, { stdio: 'inherit' });
      console.log(`Valid JSON: ${file}`);
    } catch (error) {
      console.error(`JSON Linting error in ${file}: ${error}`);
      process.exit(1);
    }
  });
});
