const fp = require('fastify-plugin');
const pgPromise = require('pg-promise')();
const applyMigration = require('./helper/migration');
const config = require('../config');

const db = async (fastify, options) => {
  const dbConnection = pgPromise(config.database_uri);

  fastify.decorate('db', dbConnection);
  fastify.log.info('Migration is about to be applied');

  const migrationCount = await applyMigration();

  fastify.log.info(`${migrationCount} migration(s) applied`);
};

module.exports = fp(db, { async: true });
