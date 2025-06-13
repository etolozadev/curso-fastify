const fp = require('fastify-plugin');

module.exports = fp(async (fastify) => {
  // Registro del generador de especificaciones OpenAPI
  await fastify.register(require('@fastify/swagger'), {
    swagger: {
      info: {
        title: 'fastify project',
        description: 'Fastify swagger API',
        version: '0.1.0',
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here',
      },
      host: 'localhost:5000',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
      tags: [{ name: 'Temp', description: 'Temp related end-points' }],
      definitions: {
        Temp: {
          type: 'object',
          required: ['id', 'title'],
          properties: {
            id: { type: 'string', format: 'uuid' },
            title: { type: 'string' },
          },
        },
      },
    }
  });

  // Registro de la interfaz Swagger UI
  await fastify.register(require('@fastify/swagger-ui'), {
    routePrefix: '/swagger',
    uiConfig: {
      docExpansion: 'full',
      deepLinking: false,
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
    exposeRoute: true,
  });
});
