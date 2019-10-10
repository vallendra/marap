import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from 'easy-peasy';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import store from './redux/store';
import App from './components/App';
import reset from './constants/css/reset';

const GlobalStyle = createGlobalStyle`${reset}`;

ReactDOM.render(
  <BrowserRouter>
    <>
      <StoreProvider store={store}>
        <App />
      </StoreProvider>
      <GlobalStyle />
    </>
  </BrowserRouter>,
  document.getElementById('root')
);
