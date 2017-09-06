/**
 * Created by x.jin on 20/06/2017.
 */
import Router from 'koa-router';
const indexRouter = new Router();
import { renderFullPage } from '../serverRendering/index'
import createStore from '../store/store'
import { fetchData } from '../containers/home/actionCreator'
import { renderWithData } from '../serverRendering/serverRender'


indexRouter.get('/about', async function (ctx) {

    let store = createStore();

    await store.dispatch(fetchData())

    ctx.body=renderFullPage(renderWithData(ctx, store), store.getState())
})



indexRouter.get('*', function (ctx) {
    let store = createStore();


    ctx.body=renderFullPage(renderWithData(ctx, store))
})



export { indexRouter }

