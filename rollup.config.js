import sass from 'rollup-plugin-sass';
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
    'classnames'
  ],
  plugins: [
    sass({insert: true}),
    resolve(),
    babel({exclude: 'node_modules/**', plugins:['external-helpers']})
  ]
};
