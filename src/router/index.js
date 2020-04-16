/*
router.js 控制全部的路由初始化设置
*/
import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom' //Redirect HashRouter BrowserRouter
import { Provider } from 'react-redux'
import store from '../store'

import App from '../App'
import Admin from '../admin'
import list from './list'

import { renderNotFound, getBasename } from '@ice/stark-app'
export default () => {
    return (
        <Router basename={getBasename()}>
            {/* <App> */}
            <Switch >
                <Route path="/" render={() =>
                    <Admin>
                        <Switch>
                            {list.map((item) => {
                                return <Route exact path={item.path} component={item.component} key={item.id} />
                            })}
                        </Switch>
                    </Admin>
                } />
            </Switch>
            {/* </App> */}
        </Router>
    )
}