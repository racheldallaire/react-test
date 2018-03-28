import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';
import bodyParser from 'body-parser';
import pg from 'pg';
import cookieSession from 'cookie-session';

const databaseRoutes  = express.Router();
const app = express();

app.use(webpackMiddleware(webpack(webpackConfig)));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
  const cookie_id = req.session.id
    if(cookie_id > 0)
    req.session = {"id": cookie_id};
});

app.listen(8080, () => console.log('Server listening on port 8080'));

// Routes //

app.post('/register', (req, res) => {
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let role = req.body.role;
    let password = req.body.description;
    const cookie_id = req.session.id

    knex('users').insert({
      first_name: first_name,
      last_name: last_name,
      role: role,
      password: password})
      .returning('id')
    res.redirect('/');
  });