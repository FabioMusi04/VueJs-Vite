import './style.css'
import { createApp } from 'vue';
import App from './App.vue'
import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
  { path: '/', component: ()=> import('./views/Home.vue'), name:"home" },
  { path: '/about', component: ()=> import('./views/About.vue'),name:"about"},
  { path: '/contact', component: ()=> import('./views/Contact.vue'),name:"contact"},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})

const app  = createApp(App)
app.use(router)
app.mount("#app")
