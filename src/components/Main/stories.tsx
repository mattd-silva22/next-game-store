import { Meta, StoryObj } from "@storybook/react";

import Main from ".";

export default {
  title: "Main",
  component: Main,
  args: {
    title: "Teste Storybook",
    description: "Default description",
    text: "Default text",
    parameters: {
      layout: "fullscreen",
    },
  },
} as Meta;

export const Default: StoryObj = {};
