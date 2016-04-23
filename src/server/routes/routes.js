import { buildHandler, helloHandler } from '../lib/handlers';

export const routes = {
    build: {
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: 'build'
            }
        }
    },
    hello: {
      method: 'GET',
      path: '/',
      handler: helloHandler
    }
};