import React from 'react'
// import { connect } from 'react-redux'
import MySider from '@views/layout/sider'
import MyFooter from '@views/layout/footer'
import { Layout } from 'antd'//, 

class Admin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    // static getDerivedStateFromProps(nextProps, prevState) {

    // }
    componentDidMount() {

    }
    render() {
        return (

            <Layout style={{ minHeight: '100vh' }}>
                <MySider />
                <Layout>
                    <div className="contentChild" style={{ height: '100%', background: '#fff' }}>
                        {this.props.children}
                    </div>
                    <MyFooter />
                </Layout>
            </Layout>

        )
    }
}
// export default connect()(Admin)
export default Admin
