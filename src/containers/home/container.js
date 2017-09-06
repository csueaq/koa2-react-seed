/**
 * Created by x.jin on 04/09/2017.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Banner from '../../components/banner'
import Loader from '../../components/loader'
import * as actions from './actionCreator'
class Home extends Component {

    componentDidMount() {

        let { content } = this.props.home;

        !content && this.props.dispatch(actions.getContentAction())
    }

    render() {

        console.log("view", this.props.router.location.pathname)
        let { content, loading } = this.props.home;

        return loading ? <Loader/> : <Banner content={content} />
    }

}

function mapStateToProps(state) {
    return {
        home:state.home,
        router:state.router
    }
}

export default connect(mapStateToProps)(Home)