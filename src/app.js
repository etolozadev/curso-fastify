const fastify = require('fastify');
const db = require('./plugin/database');
const route = require('./route/tempTestRoute');
const swagger = require('./plugin/swagger');

const build = (opts = {}) => {
  const app = fastify(opts);
  // register plugins
  app.register(db);
  app.register(swagger);

  app.register(route, { prefix: 'api/v1/test' });

  app.get('/', async (request, reply) => {
    reply.code(200).send({ hello: 'Hola mundo con CI/CD' });
  });

  return app;
};

module.exports = build;
