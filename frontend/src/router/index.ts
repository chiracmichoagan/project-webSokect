import ToolBar from '@/components/ToolBar.vue';
import CanvasComponent from '@/components/CanvasComponent.vue';
import HomeComponent from '@/components/HomeComponent.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComponent
    },

    {
      path: '/cancas',
      name: 'canvas',
      component: CanvasComponent
    },
    {
      path: '/toolbar',
      name: 'toolbar',
      component: ToolBar
    }
  ],
})

export default router
