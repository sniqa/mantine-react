import Fastify from 'fastify'

const server = Fastify({})

server.post('/phl', {}, async (request, response) => {})

server.get('/phl', {}, async (request, response) => 'response')

server.listen({ port: 8080 })
