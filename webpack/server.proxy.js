const c2k = require('koa2-connect');
const Router = require('koa-router');
const httpProxy = require('http-proxy-middleware');

const Proxy = (proxyTable) => {
    let router = new Router();
    for (let i in proxyTable) {
        router.get(`${i}*`, c2k(httpProxy(proxyTable[i])));
        router.post(`${i}*`, c2k(httpProxy(proxyTable[i])));
    }
    return router.routes();
};

module.exports = Proxy;
