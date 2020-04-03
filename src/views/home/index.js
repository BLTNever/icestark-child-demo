import React, { PureComponent } from 'react'
import { actionCreators as commonActionCreators } from '@store/common/'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
class Home extends PureComponent {
    constructor(props) {
        super(props)
        this.state = { msg: 'hello' }
        // this.clickFn = this.clickFn.bind(this)
    }
    componentDidMount() { }

    componentWillUnmount() { }
    render() {
        return (
            <div >
                HOME
            </div>
        )
    }
}

// const mapState = state => ({
// })

// const mapDispatch = dispatch => ({

// })
// export default withRouter(connect(
//     mapState,
//     mapDispatch
// )(Home))
export default Home
