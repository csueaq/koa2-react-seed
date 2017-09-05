require("babel-register")({
    plugins: [
        ["transform-object-rest-spread", { "useBuiltIns": true }]
    ]
});
const Koa = require('koa');
const json = require('koa-json')
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const indexRouter = require('./src/routes/index');
const serve = require('koa-static-cache');

app.use(serve('public',{gzip:true}));

app.use(async function (ctx, next) {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

// logger

app.use(async function (ctx, next) {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});


app.use(json())


app
    .use(indexRouter.middleware())
    .use(router.allowedMethods());

app.listen(3001);