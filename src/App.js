// @flow
import * as React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { StoreProvider } from 'easy-peasy';
import MainRouter from 'utils/router';
import ErrorBoundary from 'utils/error-boundary';
import theme from 'constants/theme';
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
