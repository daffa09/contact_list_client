import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { 
        path: '/',
        name: 'contact.index',
        component: () => import("../views/contact/index.vue")
    },
    { 
        path: '/create',
        name: 'contact.create',
        component: () => import("../views/contact/create.vue")
    },
    { 
        path: '/edit/:id',
        name: 'contact.edit',
        component: () => import("../views/contact/edit.vue")
    },
]


const router =  createRouter({
    history: createWebHistory(),
    routes
});

export default router;