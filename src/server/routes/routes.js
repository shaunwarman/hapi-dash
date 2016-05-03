export const routes = {
    build: {
        method: 'GET',
        path: '/{p*}',
        handler: {
            directory: {
                path: 'build'
            }
        }
    },
    hello: {
      method: 'GET',
      path: '/',
      handler: (request, reply) => {
          return reply.view('master', { title: 'Herro', message: 'How goes it!' });
      }
    }
};