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

        let { home : { content }, getContent } = this.props;

        !content && getContent()
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

function mapDispatchToProps (dispatch) {
    return {
        getContent: () => dispatch(actions.fetchData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)