/**
 * Created by x.jin on 05/09/2017.
 */
import { createMemoryHistory } from 'history'
import { StaticRouter } from 'react-router'
import App from '../components/app'
import ReactDOMServer from 'react-dom/server'
import React from 'react'


export function renderWithData(store, ctx) {

    const context = {}
    const history = createMemoryHistory()
    history.location = { ...history.location , ...{ pathname: ctx.url }}
    const html =  ReactDOMServer.renderToStaticMarkup(
        <StaticRouter
            location={ctx.url}
            context={context}
        >
            <App store={store} history={history} />
        </StaticRouter>
    );
    console.log(context)
    if (context.url) {
        ctx.redirect(context.url)
    } else {
        return html
    }
}