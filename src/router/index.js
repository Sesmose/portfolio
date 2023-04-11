import { createRouter, createWebHistory } from 'vue-router'
import About from '../components/About.vue'
import Works from '../components/Works.vue'
import Contact from '../components/Contact.vue'
import Projects from '../components/Projects.vue'

const routes  =[
  {
    path: '/',
    name: 'About',
    component: About,
  },
  {
    path: '/experiences',
    name: 'Experiences',
    component: Works,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
      }
    }
  }
})


export default router
