import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';
import bodyParser from 'body-parser';
import pg from 'pg';
import bcrypt from 'bcrypt';
import axios from 'axios';
const knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    //port: 5432,
    host : 'localhost',
    user : 'rach',
    password : 'pass',
    database : 'reacttest'
  }
});

import users from './routes/users';
import auth from './routes/auth';

const databaseRoutes  = express.Router();
const app = express();

app.use(webpackMiddleware(webpack(webpackConfig)));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('http://104.131.15.9:3030/api/users/createDummyUser/', users);
app.use('http://104.131.15.9:3030/api/users/checkDummyUser/', auth);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(8080, () => console.log('Server listening on port 8080'));