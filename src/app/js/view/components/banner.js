/**
 * Created by x.jin on 04/09/2017.
 */


import React from "react";
export default ({ content }) => {

    return (
        <div dangerouslySetInnerHTML={{__html : content}}>

        </div>
    )
}