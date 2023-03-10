const config = {
  staticDirs: ['../src'],
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', {
    name: '@storybook/addon-postcss',
    options: {
      postcssLoaderOptions: {
        implementation: require('postcss')
      }
    }
  }],
  framework: {
    name: '@storybook/web-components-webpack5',
    options: {}
  },
  docs: {
    autodocs: true
  }
};

export default config;