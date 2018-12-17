
require('@babel/register');
require('@babel/polyfill');

const Koa = require('koa');
const logger = require('koa-logger');

const { matchRoutes } = require('react-router-config');
const convert = require('koa-convert');
const serve = require('koa-static');
const render = require('./render');


const app = new Koa();
app.use(convert(logger()));

const resource = ((manifest) => {
    let res= '';
    for (let i in manifest) {
        if (/\.css$/i.test(manifest[i])) {
            res = res.concat(`<link rel="stylesheet" href="${manifest[i]}" >`);
        }
        if (/\.js$/i.test(manifest[i])) {
            res = res.concat(`<script src="${manifest[i]}"> </script>`);
        }
    }
    return res;
})(require('../../dist/client/manifest.json'));

app.use(render({ resource }));
app.use(serve('./dist/client', { index: 'null' }));
app.listen(3000, () => {
    console.log('server start at port  3000');
});
