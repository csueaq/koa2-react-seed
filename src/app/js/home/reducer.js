/**
 * Created by x.jin on 20/06/2017.
 */
import { actions } from './actions'
let initialState ={
    content: null,
    loading:false,
    error: false
};



export default function (state = initialState, action={}) {
    switch (action.type) {
        case actions.getContent.request:
            return {state, ...{loading : true}}

        case actions.getContent.failure:
            return {state, ...{loading : false, error: true}}
        case actions.getContent.success:
            console.log(action.result)
            return {state, ...{ content : action.result, loading : false} }

        default:
            return state
    }
}