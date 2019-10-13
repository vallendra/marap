// @flow
import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootId: string = 'root';
const mountElement: HTMLElement | null = document.getElementById(rootId);

if (mountElement) ReactDOM.render(React.createElement(App), mountElement);
