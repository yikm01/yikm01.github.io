import Vue from 'vue'
import Router from 'vue-router'

const left = () => import('../components/left')
const top = () => import('../components/top')
const maincon = () => import('../components/maincon')
const bottom = () => import('../components/bottom')
const introme = () => import('../components/introme')
const project = () => import('../components/project')

Vue.use(Router)
export default new Router({
  routes: [
    {
      path:'',
      redirect:'/introme'
    },
    {
      path:'/introme',
      name:introme,
      component: introme,
      children:[
        {
          path: '/left',
          name: 'left',
          component: left
        },
        {
          path:'/maincon',
          name:'maincon',
          component:maincon
        }
      ]
    },
    {
        path:'/top',
        name:'top',
        component:top
    },
    {
      path:'/bottom',
      name:'bottom',
      component:bottom
    },
    {
      path:'/project',
      name:project,
      component: project,
    },
  ]
})
