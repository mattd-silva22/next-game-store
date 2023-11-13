const config = {
  staticDirs: ["../public"],
  stories: ["../src/components/**/*.stories.@(tsx|mdx)"],
  addons: ["@storybook/addon-essentials"],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "true",
  },
  webpackFinal: async (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`);
    return config;
  },
};
export default config;
