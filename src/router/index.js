import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/relics',
            name: 'relics',
            component: Home
        },
        {
            path: '/curses',
            name: 'curses',
            component: Home
        },
        {
            path: '/potions',
            name: 'potions',
            component: Home
        },
        {
            path: '/hexes',
            name: 'hexes',
            component: Home
        }
    ]
})
/**
 * TODO: fix this shit @grootbrendan
 * Redirects to /relics if the url is not on a router path
 * */

let routes = router.options.routes;
let routePaths = []

routes.forEach(route => {
    routePaths.push(route.path);
})

for (var i = 0; i < routePaths.length; i++) {
    if (window.location.href.indexOf(routePaths[i]) > -1) {
        break
    } else {
        window.location.href = '/relics';
        break;
    }
}


export default router
