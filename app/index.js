import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import Layout from './components/layout/Layout';

ReactDOM.render(<Provider store={ store }><Layout /></Provider>, document.getElementById('myaccountcontainer'));