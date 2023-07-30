import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/components/homePage.vue";
import AboutMe from "@/components/aboutMe.vue";
import signIn from "@/components/signIn.vue";
import signUp from "@/components/signUp.vue";
import userDashboard from "@/components/userDashboard.vue";

const routes = [
    {
        path: "/:search",
        name: "home",
        component: HomePage,
        props:true,
    },
    {
        path: "/insights-stats",
        name: "insights-stats",
        component: AboutMe,
    },
    {
        path: "/sign-in",
        name: "signIn",
        component: signIn,
    },
    {
        path: "/sign-up",
        name: "signUp",
        component: signUp,
    },
    {
        path: "/dashboard",
        name: "userDashboard",
        component: userDashboard,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;