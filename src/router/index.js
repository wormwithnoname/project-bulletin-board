import Vue from 'vue'
import VueRouter from 'vue-router'
import TopScreen from './components/TopScreen.vue'
import CreateArticleScreen from "./components/CreateArticleScreen.vue"
// import EditArticleScreen from "./components/EditArticleScreen.vue"
// import ArticleDetailScreen from "./components/ArticleDetailScreen.vue"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TopScreen',
    component: TopScreen
  },
  {
    path: '/create-article',
    name: 'CreateArticleScreen',
    component: CreateArticleScreen
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
