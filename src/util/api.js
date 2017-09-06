/**
 * Created by x.jin on 21/06/2017.
 */
import 'isomorphic-fetch';

export function getContent() {
    return fetch('https://www.foaas.com/awesome/xin').then(
        (response)=>{

            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.text()
        }
    )


}
