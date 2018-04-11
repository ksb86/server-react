// shared/routes.js
import Home from './Home'
import Foo from './Foo'
import Bar from './Bar'

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    }, {
        path: '/foo',
        component: Foo
    }, {
        path: '/bar',
        component: Bar
    }
]

export default routes
