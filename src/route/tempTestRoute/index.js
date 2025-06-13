const tempService = require("../../service/temp.service");
const { postRequestBody, getResponseBody } = require("./temp.schema");

const route = async (fastify) => {
  const {getAll, save} = tempService(fastify);
  fastify.get('/', {schema: {getResponseBody}} , async (request, reply) => {
    const allTest = await getAll();
    console.log('asdas');
    reply.code(200).send({
      temps: allTest
    });
  });

  fastify.post('/', {schema: {
    body: postRequestBody
  }}, async (request, reply) => {
    fastify.log.info(`body: ${JSON.stringify(request.body)}`);
    const title = request.body.title;
    const response = await save(title);
    fastify.log.info(`response: ${response}`);
    console.log('id: ', response.id)

    reply.code(201).send({  title: title });
  });
};

module.exports = route;
