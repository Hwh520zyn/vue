import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Regist from '@/components/Regist'
import answer from '@/components/answer'
import gl from '@/components/gl'
import civil from '@/components/civil'
import youji from '@/components/youji'
import hotel from '@/components/hotel'
import mall from '@/components/mall'
import banj from '@/components/banj'
import Local from '@/components/Local'
import Detail from '@/components/HornetDetail'
import HornetDetail from '@/components/HornetDetail'
Vue.use(Router)

export default new Router({
	mode : "history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Regist',
      name: 'Regist',
      component: Regist
    },
    {
      path: '/answer',
      name: 'answer',
      component: answer
    },
    {
      path: '/gl',
      name: 'gl',
      component: gl
    },
    {
      path: '/youji',
      name: 'youji',
      component: youji
    },
    {
      path: '/hotel',
      name: 'hotel',
      component: hotel
    },
    {
      path: '/mall',
      name: 'mall',
      component: mall
    }
     ,
    {
      path: '/civil',
      name: 'civil',
      component: civil
    },
     {
      path: '/banj',
      name: 'banj',
      component: banj
    },
     {
      path: '/Local',
      name: 'Local',
      component: Local
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/HornetDetail',
      name: 'HornetDetail',
      component: HornetDetail
    },
  ]
})
