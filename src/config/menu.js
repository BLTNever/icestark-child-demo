const comItem = [{ path: '', name: '运营后台' }]
//1
const menuObj = [
    {
        path: '/',
        name: 'Home',
        meta: { title: 'Home', permission: ['home'] },
        icon: 'ordered-list',
        menuShow: false,
        children: []
    },
    {
        path: '/master',
        name: '主档管理',
        meta: { title: '主档管理', permission: ['master'] },
        icon: 'ordered-list',
        children: []
    },

]
export default menuObj
