import PaginaInicial from './pages/PaginaInicial.vue';
import PaginaNovo from './pages/PaginaNovo.vue';
import PaginaHistorico from './pages/PaginaHistorico.vue';

import { createRouter, createWebHashHistory } from 'vue-router';

const rotas = [
  { path: '/', component: PaginaInicial },
  { path: '/novo', component: PaginaNovo },
  { path: '/historico', component: PaginaHistorico }
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes: rotas
});