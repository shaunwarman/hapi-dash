import Configure from 'hapi-configure'
import Path from 'path'

import { handleRender } from './lib/render'

const init = async function () {
    const server = await Configure({ basedir: Path.join(__dirname, '../..', 'config') })

    server.route([{
        method: 'GET',
        path: '/{p*}',
        handler: {
            directory: {
                path: 'build'
            }
        }
    },
    {
        method: 'GET',
        path: '/',
        handler: handleRender
    }])

    await server.start()

    console.log('Server running at', server.info.uri)

    return server
};

init().catch((error) => console.error(error.stack));