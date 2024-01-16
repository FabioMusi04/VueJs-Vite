import './style.css'
import { createApp, h } from 'vue/dist/vue.esm-bundler';
import App from './App.vue'
import {createRouter, createWebHashHistory} from 'vue-router'

const Home = { template: '<p>Ciao</p>' }
const About = { template: '<p>About</p>' }

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})

const app  = createApp({
    render: ()=>h(App)
});


app.use(router)

app.mount("#app")
