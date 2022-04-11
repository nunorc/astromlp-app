
import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue"
import Galaxies from "@/views/Galaxies.vue"
import Pipeline from "@/views/Pipeline.vue"
import Proc from "@/views/Proc.vue"
import Model from "@/views/Model.vue"
import Infer from "@/views/Infer.vue"
import Details from "@/views/Details.vue"

const routes = [
  { path: '/', component: Home },
  { path: '/galaxies', component: Galaxies },
  { path: '/pipeline/:id', component: Pipeline },
  { path: '/proc/:id', component: Proc },
  { path: '/model/:id', component: Model },
  { path: '/infer/:id', component: Infer },
  { path: '/details', component: Details }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
