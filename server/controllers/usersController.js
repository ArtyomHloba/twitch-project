const _ = require('lodash');
const { User } = require('./../models');

module.exports.createUser = async (req, res, next) => {
  const { body } = req;
  try {
    const createdUser = await User.create(body);
    const preparedUser = _.omit(createdUser.get(), ['createdAt', 'updatedAt']);
    res.status(201).send({ data: preparedUser });
  } catch (error) {
    next(error);
  }
};

module.exports.getUsers = async (req, res, next) => {
  const {
    query: { page, results },
  } = req;

  const limit = results;
  const offset = (page - 1) * results;

  try {
    const foundUsers = await User.findAll({
      raw: true,
      limit,
      offset,
      order: ['id'],
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });
    res.status(200).send({ data: foundUsers });
  } catch (error) {
    next(error);
  }
};
