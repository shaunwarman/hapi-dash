import Configure from 'hapi-configure'
import Path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'

import configureStore from '../common/store/configureStore'
import App from '../common/containers/App'
import { fetchCounter } from '../common/api/counter'

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

function handleRender(request, reply) {

    // Query our mock API asynchronously
    fetchCounter(apiResult => {
        // some request here
        const counter = 2;

        // Compile an initial state
        const initialState = { counter }

        // Create a new Redux store instance
        const store = configureStore(initialState)

        // Render the component to a string
        const html = renderToString(
            <Provider store={store}>
                <App />
            </Provider>
        )

        // Grab the initial state from our Redux store
        const finalState = store.getState()

        // Send the rendered page back to the client
        reply(renderFullPage(html, finalState))
    })
}

function renderFullPage(html, initialState) {
    return `
    <!doctype html>
    <html>
      <head>
        <title>Ops Dashboard</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="main.js"></script>
      </body>
    </html>
    `
}