/**
 * Created by x.jin on 05/09/2017.
 */
import { createMemoryHistory } from 'history'
import { StaticRouter } from 'react-router'
import App from '../components/app'
import ReactDOMServer from 'react-dom/server'
import React from 'react'


export function renderWithData(store, location) {

    return ReactDOMServer.renderToStaticMarkup(
        <StaticRouter
            location={location}
            context={{}}
        >
            <App store={store} history={createMemoryHistory()} />
        </StaticRouter>
    );
}