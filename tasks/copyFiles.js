/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint no-console: 0 */
import path from 'path';
import fs from 'fs-extra';

const { copySync } = fs;

copySync(
  path.resolve('index.scss'),
  path.resolve('.release', 'index.scss'),
);
copySync(
  path.resolve('functions'),
  path.resolve('.release', 'functions'),
);
copySync(
  path.resolve('mixins'),
  path.resolve('.release', 'mixins'),
);
copySync(
  path.resolve('placeholders'),
  path.resolve('.release', 'placeholders'),
);
copySync(
  path.resolve('reset'),
  path.resolve('.release', 'reset'),
);
copySync(
  path.resolve('README.md'),
  path.resolve('.release', 'README.md'),
);
copySync(
  path.resolve('LICENSE'),
  path.resolve('.release', 'LICENSE'),
);

console.log('copyFiles success!');
