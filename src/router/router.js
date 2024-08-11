import { createRouter, createWebHistory } from "vue-router";
import ViewHome from '../views/ViewHome.vue'
import ViewCollection from '../views/ViewCollection'
import ViewAbout from '@/views/ViewAbout'
import ViewContact from '@/views/ViewContact'

import CollectionWinter from '@/components/Collection/CollectionWinter'

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
    },
    {
        path: '/collection/winter-collection',
        name: 'Winter Collection',
        component: CollectionWinter
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

export default router