/**
 * Created by x.jin on 21/06/2017.
 */
import request from 'superagent'

export function getContent(resolve,reject) {
    request
        .get('https://www.foaas.com/awesome/xin')
        .end(function(err,res) {
            if(err) {
                reject();
            }
            else {
                resolve(res.text)
            }
        });
}
