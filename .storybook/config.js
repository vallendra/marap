import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import theme from 'theme';
import { withInfo } from '@storybook/addon-info';



function loadStories() {
  const req = require.context('../src', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

/**
 * @param {React.Node} children
 */
const Box = ({ children }) => <React.Fragment>{children}</React.Fragment>;

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  html,
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`;

addDecorator(withInfo());
addDecorator(story => (
  <ThemeProvider theme={theme}>
    <Box>
      <GlobalStyle />
      {story()}
    </Box>
  </ThemeProvider>
));

addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS
    }
  },
  options: {
    isFullscreen: false,
    showNav: true,
    showPanel: false,
    sortStoriesByKind: true,
    hierarchySeparator: /\/|\./,
    hierarchyRootSeparator: /\|/
  },
  info: {
    inline: true,
    header: false
  }
});

configure(loadStories, module);
