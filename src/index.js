import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import Router from './router'
import '@static/css/normalize.css'
import '@views/layout/layout.less'

import { isInIcestark, getMountNode, registerAppEnter, registerAppLeave } from '@ice/stark-app';

if (isInIcestark()) {
    const mountNode = getMountNode()
    console.log('mountNode:', mountNode)
    registerAppEnter(() => {
        ReactDOM.render(Router(), mountNode);
    })

    // make sure the unmount event is triggered
    registerAppLeave(() => {
        ReactDOM.unmountComponentAtNode(mountNode);
    })
} else {
    ReactDOM.render(
        // <Provider store={store}>
        <Router />,
        // </Provider>,
        document.getElementById('root')
    )
}

