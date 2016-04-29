import Configure from 'hapi-configure';
import Handlebars from 'handlebars';
import Path from 'path';

import { routes } from '../server/routes/routes';

const init = async function () {
    const server = await Configure({ basedir: Path.join(__dirname, '../..', 'config') });
    
    server.views({
        engines: { html: Handlebars },
        relativeTo: __dirname,
        path: '../client/views',
        layout: 'master'
    });

    server.route([
        routes.hello,
        routes.build
    ]);

    await server.start();

    console.log('Server running at', server.info.uri);

        return server;
    };

    init().catch((error) => console.error(error.stack));