import express from 'express';
import bcrypt from 'bcrypt'
import User from '../models/user'

const router = express.Router();

  router.post('http://104.131.15.9:3030/api/users/createDummyUser/', (req, res) => {
    console.log(req.body)
    const { first_name, last_name, role, password } = req.body;
    const hashedpass = bcrypt.hashSync(password, 10);

    User.forge({
      first_name, last_name, role, hashedpass
    }).save()
    .then(user => res.json({ success: true}))
    .catch(err => res.status(500).json({error: err}))
  });


export default router;