import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Top',
      component: () => import('../views/Top.vue')
    },
    {
      path: '/AboutMe',
      name: 'AboutMe',
      component: () => import('../views/AboutMe.vue')
    },
    {
      path: '/SkillSet',
      name: 'SkillSet',
      component: () => import('../views/SkillSet.vue')
    },
    {
      path: '/Activities',
      name: 'Activities',
      component: () => import('../views/Activities.vue')
    },
    {
      path: '/Products',
      name: 'Products',
      component: () => import('../views/SkillSet.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/Contact.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
