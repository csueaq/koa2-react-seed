/**
 * Created by x.jin on 21/06/2017.
 */
import {getContent} from '../../util/api'
import { actions } from './actions'


export function getContentAction() {
    return {
        types: [actions.getContent.request, actions.getContent.success, actions.getContent.failure],
        promise: () => {
            return new Promise((resolve, reject) => {
                getContent(resolve,reject);
            })
        }
    }
}
