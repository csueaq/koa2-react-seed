/**
 * Created by x.jin on 20/06/2017.
 */
import Router from 'koa-router';
const indexRouter = new Router();
import { renderFullPage } from '../serverRendering/index'
import createStore from '../store/store'
import { getContentAction } from '../containers/home/actionCreator'
import { renderWithData } from '../serverRendering/serverRender'


indexRouter.get('/about', async function (ctx) {

    console.log('1')
    let store = createStore();

    await store.dispatch(getContentAction())

    ctx.body=renderFullPage(renderWithData(store, ctx), store.getState())
})

indexRouter.get('/private', async function (ctx) {

    console.log('2')

    let store = createStore();

    //await store.dispatch(getContentAction())

    ctx.body=renderFullPage(renderWithData(store, ctx), store.getState())
})

indexRouter.get('*', function (ctx) {

    console.log('3')

    ctx.body=renderFullPage("");
})



export { indexRouter }

