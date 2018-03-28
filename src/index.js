import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';

require("./stylesheets/main.scss");

render (<App />, document.getElementById('app'));