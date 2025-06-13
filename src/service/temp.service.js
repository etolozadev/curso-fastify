const tempDao = require('../dao/temp.dao.js');
const tempService = (fastify) => {
    const dao = tempDao(fastify);

  const getAll = () => dao.getAll();
  const save = (title) => {
    if (!title || typeof title !== 'string') {
      throw new Error('Invalid title');
    }
    return dao.save(title);
  }


  return { getAll, save };
};

module.exports = tempService;
