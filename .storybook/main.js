module.exports = {
  stories: [
    // '../stories/**/*.stories.mdx',
    '../src/components/Post/*.stories.js',
    // '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-postcss',
  ],
};
