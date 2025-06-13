const dao = (fastify) => {
    const getAll = async () => await fastify.db.query('SELECT * FROM testTable');
    const save = (title) => fastify.db.query('INSERT INTO testTable (title) VALUES ($1)', [title]);

    return { getAll, save };
};
module.exports = dao;