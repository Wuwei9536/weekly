const Koa = require('koa');
const request = require('request');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const { devServer: { proxy, port, host }, entry }= require('./webpack.config.dev');
const serverConfig = require('./server.webpack.config.dev.js');
const koaDevware = require('./server.devware');
const koaProxy = require('./server.proxy');

const compiler = webpack(serverConfig);

request(`http://${host}:${port}/manifest.json`, (err, res, body) => {
    if (err) {
        console.error('error: please start dev server');
        return;
    }
    const resource = JSON.parse(body);
    const app = new Koa();
    app.use(koaProxy({
        ...proxy,
        '/public': {
            target: `http://${host}:${port}/public`,
            pathRewrite: {
                '^/public' : ''
            },
            changeOrigin:true
        }
    }));
    app.use(koaDevware(
        webpackDevMiddleware(
            compiler,
            { noInfo: true }
        ),
            compiler
        ));
    app.use(webpackHotServerMiddleware(
        compiler,
        {
            createHandler: webpackHotServerMiddleware.createKoaHandler,
            serverRendererOptions:{
                env: 'development',
                resource
            }
        }
    ));
    app.listen(3000, () => {
        console.log('Server started: http://localhost:3000/');
    });
});
