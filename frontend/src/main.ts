import './assets/main.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {io} from 'socket.io-client'

const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.use(pinia)
app.mount('#app')

const clientWs = new WebSocket('ws://localhost:3000')

const socket = io('http://localhost:3000'); // Connects to the server
