

require('@babel/register');
require('@babel/polyfill');

const React = require('react');
const { StaticRouter, Switch } = require('react-router-dom');

const Router = StaticRouter;
// import PropTypes from 'prop-types';


const { renderToString } = require('react-dom/server');
const { renderRoutes } = require('react-router-config');
const Routes = require('../router').default;
const Context = require('./context').default;

const App = () => (
    <Router context= { {} }>
        <Switch>
            {renderRoutes(Routes)}
        </Switch>
    </Router>
);

const serverRender =({ clientStats, serverStats, resource }) => async (ctx, next) => {
    const JS = `
            <script src="${resource['vendors~app.js']}"></script>
            <script src="${resource['app.js']}"></script>
        `;
    console.log(JS);
    const CSS = `
            <link rel="stylesheet" href="${resource['vendors~app.css']}">
            <link rel="stylesheet" href="${resource['app.css']}">
        `;

    const content = await renderToString(<App />);
    ctx.body = `
        <!doctype html>
        <html>
        <head>
            <title>微盟分销</title>
            ${CSS}
        </head>
        <body>
            <div id="app">${content}</div>
            ${JS}
        </body>
        </html>
    `;
    await next();
};
module.exports = serverRender;
