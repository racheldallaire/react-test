import express from 'express';

const router = express.Router();

  router.post('http://104.131.15.9:3030/api/users/checkDummyUser/', (req, res) => {
    const { first_name, password } = req.body;

    User.query({
      where: { username: first_name }
    })
  });

export default router;