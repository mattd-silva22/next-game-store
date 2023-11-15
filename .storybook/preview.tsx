import { GlobalStyle } from "../src/styles/globalStyle";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

export const decorators = [
  withThemeFromJSXProvider({ GlobalStyles: GlobalStyle }),
];
