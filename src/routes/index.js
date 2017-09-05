/**
 * Created by x.jin on 20/06/2017.
 */
import Router from 'koa-router';
const indexRouter = new Router();
import { renderFullPage } from '../serverRendering/index'
import request from 'superagent'



indexRouter.get('/api/test', function (ctx, next) {

    let a = 1
    let b = {c: 1, d: 1}
    ctx.body={ a, ...b }
})

indexRouter.get('/api/test2', async function (ctx, next) {

    const response = await request.get('https://google.com')

    console.log(response)

    ctx.body=JSON.stringify(response)
})

indexRouter.get('*', function (ctx, next) {


    ctx.body=renderFullPage();
})



module.exports = indexRouter

