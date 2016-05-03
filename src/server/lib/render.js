import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import React from 'react'

import { fetchCounter } from '../../common/api/counter'
import App from '../../common/containers/App'
import configureStore from '../../common/store/configureStore'


export function handleRender(request, reply) {

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