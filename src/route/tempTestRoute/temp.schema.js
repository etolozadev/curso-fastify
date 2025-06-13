const postRequestBody = {
    type: 'object',
    required: ['title'],
    properties: {
        title: { type: 'string', minLength: 1, maxLength: 100 },
    },
}

const getResponseBody = {
    type: 'array',
    items: {
        type: 'object',
        properties: {
            id: { type: 'integer' },
            title: { type: 'string', minLength: 1, maxLength: 100 },
        },
    },
}



module.exports = {
    postRequestBody,
    getResponseBody
}