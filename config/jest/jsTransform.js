'use strict';

const { createTransformer } = require('babel-jest');
const packageJson = require('../../package.json');

// This is a custom Jest transformer that process *.js files
// http://facebook.github.io/jest/docs/tutorial-webpack.html
const babelOptions = {
  ...packageJson.babel,
  plugins: [
    ...packageJson.babel.plugins,
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true,
      },
    ],
  ],
};

module.exports = createTransformer(babelOptions);
