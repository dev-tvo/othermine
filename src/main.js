import { createApp } from 'vue'
import { createPinia } from "pinia/dist/pinia";
import App from './App.vue'
import router from './router'
import lazyPlugin from 'vue3-lazy'

import './assets/main.css'
const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(lazyPlugin, {
    loading: 'src/assets/images/loading-small.svg',
    error: 'src/assets/images/error.png'
})

app.mixin({
    data() {
        return {
        }
    },
    methods: {
    },
    computed: {
    },
    mounted() {
    }
})

app.mount('#app')
