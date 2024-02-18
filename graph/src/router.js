import { createRouter, createWebHistory } from 'vue-router';
import CrearLibro from './components/CrearLibro.vue';
import CardGuardar from './components/CardGuardar.vue';

const routes = [
  
  { path: '/', component: CrearLibro},
    {path: '/guardarlibro', component: CardGuardar },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;