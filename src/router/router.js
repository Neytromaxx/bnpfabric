import { createRouter, createWebHistory } from "vue-router";
import ViewHome from '../views/ViewHome.vue'
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
        component: () => import('@/views/ViewCollection')
        // component: () => import('@/components/Collection/AppCollection')
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
        path: '/summer-collection',
        name: 'Summer Collection',
        component: () => import('@/components/Collection/CollectionSummer')
    },
    {
        path: '/autumn-collection',
        name: 'Autumn Collection',
        component: () => import('@/components/Collection/CollectionAutumn')
    },
    {
        path: '/spring-collection',
        name: 'Spring Collection',
        component: () => import('@/components/Collection/CollectionSpring')
    },
    {
        path: '/product/squares',
        name: 'Squares',
        component: () => import('@/pages/PageSquare')
    },
    {
        path: '/collection/squares',
        name: 'Squares',
        component: () => import('@/pages/PageSquare')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

export default router