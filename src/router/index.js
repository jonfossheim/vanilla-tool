import Vue from 'vue'
import Router from 'vue-router'
import Professions from "../components/Professions";
import TalentTable from "../components/TalentTable";
import HomeView from "../components/HomeView";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/talents',
      name: 'Talents',
      component: TalentTable
    },
    {
      path: '/professions',
      name: 'Professions',
      component: Professions
    }
  ]
})
