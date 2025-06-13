require('dotenv').config();
const PORT = process.env.PORT || 5000;

const server = require('./src/app')({
  logger: {
    level: 'info',
  },
});

const start = async () => {
  try {
    await server.listen({ host: '0.0.0.0', port: PORT });
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};

start();
