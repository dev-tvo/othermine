import {createApp} from 'vue'
import {createPinia} from "pinia/dist/pinia";
import {inject} from '@vercel/analytics';
import App from './App.vue'
import router from './router'

import './assets/main.css'

const pinia = createPinia()
const app = createApp(App)


inject();

app.use(pinia)
app.use(router)

app.mixin({
    data() {
        return {}
    },
    methods: {},
    computed: {},
    mounted() {
    }
})

app.mount('#app')
