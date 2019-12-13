import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@babel/polyfill';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const rootNode = document.querySelector('#root');
ReactDOM.render(<App />, rootNode);
