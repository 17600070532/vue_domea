import Vue from 'vue'
import Router from 'vue-router'
import Index from '../page/index'
import Disclaimer from '../page/disclaimer/disclaimer'


Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/disclaimer',
            name: 'Disclaimer',
            component: Disclaimer
        }
    ]
});
router.afterEach(()=>window.scrollTo(0, 0));

export default router
