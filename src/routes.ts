import{createRouter,createWebHistory} from 'vue-router'
import Homepage from "./views/HomePage.vue"
import page1 from "./views/IntroductionPage.vue"
import page2 from "./views/PresentationPage.vue"
import page3 from "./views/SupportPage.vue"
// import Homepage from "./views/Homepage.vue"
// import Homepage from "./views/Homepage.vue"
const router = createRouter({
  history:createWebHistory(),
  routes:[
	{path:'/',component:Homepage},
	{path:'/page1',component:page1},
	{path:'/page2',component:page2},
	{path:'/page3',component:page3},
  ],
})
export default router