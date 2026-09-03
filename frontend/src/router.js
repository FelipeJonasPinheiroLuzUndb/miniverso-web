import { createRouter, createWebHistory } from 'vue-router';

// Importando as páginas (certifique-se de que os arquivos existem na pasta views)
import Home from './views/Home.vue';
import Blog from './views/Blog.vue';
import Login from './views/Login.vue';
import Dashboard from './views/Dashboard.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  }
];

const router = createRouter({
  // O createWebHistory garante que a URL fique limpa (ex: /blog) sem aquele "#" antigo
  history: createWebHistory(),
  routes
});

export default router;