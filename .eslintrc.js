// http://eslint.org/docs/user-guide/configuring
module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    'no-use-before-define': 0,
  },
};
