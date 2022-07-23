document.cookie = 'cookie1=value1; SameSite=Lax';
document.cookie = 'cookie2=value2; SameSite=None; Secure';

import { createApp } from 'vue'
import { createPinia } from "pinia/dist/pinia";
import App from './App.vue'
import router from './router'
import lazyPlugin from 'vue3-lazy'

import './assets/main.css'

const pinia = createPinia()
const app = createApp(App)

app.use(lazyPlugin, {
    loading: 'src/assets/images/loading-small.svg',
    error: 'src/assets/images/error.png'
})

app.use(router)
app.use(pinia)

app.mixin({
    data() {
        return{
            items: []
        }
    },
    methods: {

    },
    computed: {
        items() {
            return
        }
    }
})

app.mount('#app')
