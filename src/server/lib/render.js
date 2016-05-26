import { renderToString } from 'react-dom/server'
import React from 'react'


export function handleRender(request, reply) {
    const html = `Hello`
    const initialState = {}

    // Send the rendered page back to the client
    return reply(renderFullPage(html, initialState))
}

function renderFullPage(html, initialState) {
    return `
    <!doctype html>
    <html>
      <head>
        <title>Ops Dashboard</title>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic" rel="stylesheet">
        <link href="app.css" rel="stylesheet" />
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