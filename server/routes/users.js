import express from 'express';

const router = express.Router();

  router.post('http://104.131.15.9:3030/api/users/createDummyUser/', (req, res) => {
    console.log(req.body)
  });

export default router;