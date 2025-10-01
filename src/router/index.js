import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Home' }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: { title: 'About' }
  },
  {
    path: '/portfolio',
    redirect: '/swot'
  },
  {
    path: '/swot',
    name: 'swot',
    component: () => import('../views/SWOT.vue'),
    meta: { title: 'SWOT' }
  },
  {
    path: '/blog',
    redirect: '/porters-five-forces'
  },
  {
    path: '/porters-five-forces',
    name: 'portersFiveForces',
    component: () => import('../views/PortersFiveForces.vue'),
    meta: { title: "Porter's Five Forces" }
  },
  {
    path: '/read/:slug/:id',
    name: 'articleDetail',
    component: () => import('../views/ArticleView.vue'),
    meta: { title: 'Blog' }
  },
  {
    path: '/materi',
    name: 'materi',
    component: () => import('../views/MateriView.vue'),
    meta: { title: 'Materi' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title + 'PORTOFOLIO'; // Mengambil judul dari meta atau mengatur judul default jika tidak ada
  next();
});

export default router
