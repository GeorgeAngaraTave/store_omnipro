import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    redirect: { name: 'Inicio' },
    component: () => import("../components/main"),    
    children: [
      {
        path: 'article',
        name: "Article",
        component: () => import("../components/Article"),        
      },      
    ]
  },
  {
    path: "/inicio",
    name: "Inicio",
    component: () => import("../components/Initial"),        
  },
  {
    path: "/menu-screen",
    name: "Menu-screen",
    component: () => import("../components/MenuScreen"),        
  },  
];
const router = new VueRouter({
  routes,
});
export default router;
