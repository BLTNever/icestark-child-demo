
import Home from '@views/home/loadable'
import Master from '@views/master/loadable'

const routerList = [
    { id: '1', path: '/', redirect: false, component: Home },
    { id: '2', path: '/master', redirect: false, component: Master },
]

export default routerList