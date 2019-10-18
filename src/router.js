import Vue from 'vue'
import Router from 'vue-router';
import Home from '@/views/index';
import UserIndex from '@/views/user/index';
import UserCreate from '@/views/user/create';
import Journal from '@/components/Journal';
import Balloon from '@/components/Balloon';

let routers = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/user',
        component: UserIndex,
        meta : {
            layout: 'header1'
        }

    },
    {
        path: '/user/create',
        component: UserCreate,
        meta : {
            layout: 'header1'
        }

    },
    {
        path: '/journal',
        component: Journal,
        meta: {
            layout: 'header1'
        }
    },
    {
        path: '/balloon',
        component: Balloon,
        meta: {
            layout: 'header1'
        }
    }
];
routers.map(i=>{
    if( ! i.hasOwnProperty('meta') ){ i.meta = {} }
    if( ! i.meta.hasOwnProperty('layout') ){ i.meta.layout = "default"; }
})
Vue.use(Router)
// initialize router with the respective routes
export default new Router({
    routes: routers 
})
