const route = async (fastify) => {
  fastify.get('/', async (request, reply) => {
    const data = await fastify.db.query('SELECT * FROM testTable');
    console.log('asdas');
    reply.code(200).send(data);
  });

  fastify.post('/', async (request, reply) => {
    fastify.log.info(`body: ${JSON.stringify(request.body)}`);
    const title = request.body.title;
    const { id, title: titleDb } = await fastify.db.one(
      'INSERT INTO testTable (title) VALUES ($1) RETURNING id, title',
      [title],
    );

    reply.code(201).send({ id: id, title: titleDb });
  });
};

module.exports = route;
