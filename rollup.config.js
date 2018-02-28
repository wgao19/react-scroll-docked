import sass from 'rollup-plugin-sass';
import flow from 'rollup-plugin-flow';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
  },
  plugins: [
    sass(),
    flow(),
    resolve({
      // pass custom options to the resolve plugin
      customResolveOptions: {
        moduleDirectory: 'node_modules',
      },
    }),
    babel(babelrc())
  ],
};
