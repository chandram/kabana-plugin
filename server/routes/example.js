export default function (server) {

  server.route({
    path: '/api/the_one/example',
    method: 'GET',
    handler(req, reply) {
      reply({ time: (new Date()).toISOString() });
    }
  });

}
