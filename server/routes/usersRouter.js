const { Router } = require('express');
const { usersController } = require('../controllers');

const usersRouter = Router();

usersRouter
  .route('/')
  .post(usersController.createUser)
  .get(usersController.getUsers);

module.exports = usersRouter;
