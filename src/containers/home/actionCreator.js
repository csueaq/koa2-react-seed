/**
 * Created by x.jin on 21/06/2017.
 */
import {getContent} from '../../util/api'
import { actions } from './actions'


export function getContentAction() {
    return {
        type: actions.getContent.request
    }
}

export function getContentActionSuccess(data) {
    return {
        type: actions.getContent.success,
        data,
    }
}

export function getContentActionFailure() {
    return {
        type: actions.getContent.failure
    }
}

export function fetchData() {
    return (dispatch) => {
        dispatch(getContentAction())
        return getContent()
            .then((data) => dispatch(getContentActionSuccess(data)))
            .catch((err) => dispatch(getContentActionFailure()))
    }
}
