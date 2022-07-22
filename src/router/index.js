import { createRouter, createWebHistory } from 'vue-router'
import Items from '../views/Items.vue'
import Curses from '../views/Curses.vue'
import Potions from '../views/Potions.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/relics',
            name: 'relics',
            component: Items
        },
        {
            path: '/curses',
            name: 'curses',
            component: Curses
        },
        {
            path: '/potions',
            name: 'potions',
            component: Potions
        }
    ]
})

export default router
