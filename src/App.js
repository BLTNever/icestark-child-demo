import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ConfigProvider } from 'antd';
import { actionCreators as commonActionCreators } from '@store/common/'
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { withRouter } from 'react-router-dom'
moment.locale('zh-cn');
class App extends Component {
    componentDidMount() {
       
    }
    render() {
        return (
            <ConfigProvider locale={zhCN}>
                <div className="myApp" style={{ background: '#ffffff' }}>
                    {this.props.children}
                </div>
            </ConfigProvider>
        );
    }
}


const mapState = state => ({

})
const mapDispatch = dispatch => ({
   
})

export default withRouter(connect(
    mapState,
    mapDispatch
)(App))

