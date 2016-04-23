import Hapi from 'hapi';
import Inert from 'inert';
import Vision from 'vision';

import { routes } from './routes/routes';
import { plugins } from './plugins/plugins';
import { viewOptions } from './plugins/options/view';

// create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

// register plugins
server.register([
    Inert,
    Vision,
    plugins.cache,
    plugins.logging
], (err) => {
    server.views(viewOptions);
});

// add routes
server.route([
    routes.build,
    routes.hello
]);

// start the server
server.start((err) => {
    if (err) {
        throw err;
    }
    console.info('Server running at:', server.info.uri);
});