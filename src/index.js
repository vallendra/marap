import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from 'easy-peasy';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import store from './redux/store';
import App from './App';
import reset from './constants/css/reset';
import theme from './theme';

const GlobalStyle = createGlobalStyle`${reset}`;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <>
        <StoreProvider store={store}>
          <App />
        </StoreProvider>
        <GlobalStyle />
      </>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);
