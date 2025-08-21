module.exports = {
  // Entorno de ejecución
  env: {
    browser: true,
    es2021: true,
    node: true,
    'react-native/react-native': true, // Soporte para React Native
  },
  // Extiende las reglas de configuraciones populares
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all', // Reglas de React Native
    'plugin:prettier/recommended', // Integra Prettier
  ],
  // Analizador de sintaxis y opciones de parser
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  // Plugins a utilizar
  plugins: [
    'react',
    'react-native',
    'prettier',
  ],
  // Reglas personalizadas (puedes agregar tus propias reglas aquí)
  rules: {
    // Deshabilita la regla que impide usar 'prop-types' en React Native
    'react/prop-types': 'off',
  },
};