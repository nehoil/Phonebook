import Vue from 'vue'
import VueRouter from 'vue-router'
import phoneBookApp from '../views/phonebook.app.vue'
import contactDetails from '../views/contact.details.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: phoneBookApp
  },
  {
    path: '/contact/:id',
    name: 'contact',
    component: contactDetails
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
