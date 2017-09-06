/**
 * Created by x.jin on 06/09/2017.
 */
import Koa from 'koa'
import json from 'koa-json'
import Router from 'koa-router'
import { indexRouter }  from './routes/index'
import serve from 'koa-static-cache'

const app = new Koa()
const router = new Router()


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