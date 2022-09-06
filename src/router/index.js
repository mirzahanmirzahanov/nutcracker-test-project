import { createRouter, createWebHistory } from 'vue-router'

import MoviesList from '@/views/MoviesList.vue'
import SingleMovie from '@/views/SingleMovie.vue'


const routes = [
  {
    path: '/',
    name: 'MoviesList',
    component: MoviesList
  },
  {
    path: '/movie/:id',
    props: true,
    name: 'SingleMovie',
    component: SingleMovie
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
