import { createRouter, createWebHistory } from "vue-router";
import ViewHome from '../views/ViewHome.vue'
import ViewCollection from '../views/ViewCollection'
import ViewAbout from '@/views/ViewAbout'
import ViewContact from '@/views/ViewContact'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: ViewHome
    },
    {
        path: '/collection',
        name: 'Collection',
        component: ViewCollection
    },
    {
        path: '/about',
        name: 'About',
        component: ViewAbout
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ViewContact
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

export default router