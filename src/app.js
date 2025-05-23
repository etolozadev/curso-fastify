const fastify = require('fastify');
const db = require('./plugin/database');
const route = require('./route/tempTestRoute');

const build = (opts = {}) => {
  const app = fastify(opts);
  // register plugins
  app.register(db);

  app.register(route, { prefix: 'api/v1/test' });

  return app;
};

module.exports = build;
