/**
 * Created by x.jin on 20/06/2017.
 */
import Router from 'koa-router';
const indexRouter = new Router();
import { renderFullPage } from '../serverRendering/index'
import createStore from '../store/store'
import { getContentAction } from '../container/home/actionCreator'
import { renderWithData } from '../serverRendering/serverRender'


indexRouter.get('/about', async function (ctx, next) {

    let store = createStore();

    await store.dispatch(getContentAction())

    ctx.body=renderFullPage(renderWithData(store, ctx.url), store.getState())
})

indexRouter.get('*', function (ctx, next) {


    ctx.body=renderFullPage("");
})



module.exports = indexRouter

