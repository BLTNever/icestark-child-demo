
import React, { Component } from 'react'
import { Layout } from 'antd'
const { Footer } = Layout
class MyFooter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cityList: []
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (window.location.href.includes('master')) {
        } else {
            
        }
        return null
    }
    componentDidMount() {

    }
    componentWillUnmount() { }
    render() {

        return <Footer style={{ textAlign: 'center', background: '#f0f2f5', height: '48px', padding: '15px 0' }}>©2019 YPDJ.com All Rights Reserved</Footer>
    }
}

export default MyFooter

