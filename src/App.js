// @flow
import * as React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { StoreProvider } from 'easy-peasy';
import MainRouter from 'lib/router';
import ErrorBoundary from 'lib/errorBoundary';
import theme from 'theme';
import reset from 'constants/css/reset';
import store from 'store';
import router from './router.web';

import('./registerServiceWorker');

const GlobalStyled = createGlobalStyle`${reset}`;

export default function App(): React.Node {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <StoreProvider store={store}>
          <>
            <GlobalStyled />
            <MainRouter routes={router} />
          </>
        </StoreProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
}
