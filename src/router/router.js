import { createRouter, createWebHistory } from "vue-router";
import ViewHome from '../views/ViewHome.vue'
import ViewCollection from '../views/ViewCollection'
import ViewAbout from '@/views/ViewAbout'
import ViewContact from '@/views/ViewContact'
import ViewPage from '@/views/ViewPage'

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
        path: '/product',
        name: 'Pages',
        component: ViewPage
    },
    {
        path: '/winter-collection',
        name: 'Winter Collection',
        component: CollectionWinter
    },
    {
        path: '/product/squares',
        name: 'Squares',
        component: () => import('@/pages/PageSquare')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

export default router