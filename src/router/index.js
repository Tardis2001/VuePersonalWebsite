import {createRouter,createWebHistory} from "vue-router";
import Home from "@/pages/home/components/home.vue"
import Curriculum from "@/pages/curriculum/cv.vue"
//import Socials from "@/pages/mysocials/mysocials.vue"
const routes = [
    {
        path:'/',component:Home
    },{
        path:'/Curriculum',component:Curriculum
    }
]
const router = createRouter({
    history : createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
