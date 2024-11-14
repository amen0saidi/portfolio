const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: '/portfolio/', // Set base for GitHub Pages deployment
  transpileDependencies: true, // Ensures compatibility with dependencies
});
