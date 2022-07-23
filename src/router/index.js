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

export default router
