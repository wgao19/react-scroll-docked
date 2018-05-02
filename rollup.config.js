import sass from 'rollup-plugin-sass';
import flow from 'rollup-plugin-flow';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
  },
  external: [
    'react',
    'prop-types',
    'classnames'
  ],
  plugins: [
    sass(),
    resolve(),
    babel({exclude: 'node_modules/**'})
  ]
};
