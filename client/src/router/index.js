import Vue from 'vue'
import Router from 'vue-router'
import ChooseCurrentPower from '@/components/ChooseCurrentPower'
import KWToAmps from '@/components/KWToAmps'
import AmpsToKW from '@/components/AmpsToKW'
import Resultsamps from '@/components/Resultsamps'
import Resultskw from '@/components/Resultskw'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ChooseCurrentPower',
      component: ChooseCurrentPower
    },
    {
      path: '/power',
      name: 'KWToAmps',
      component: KWToAmps
    },
    {
      path: '/power/:amps',
      name: 'Resultsamps',
      component: Resultsamps
    },
    {
      path: '/current',
      name: 'AmpsToKW',
      component: AmpsToKW
    },
    {
      path: '/current/:kw',
      name: 'Resultskw',
      component: Resultskw
    }
  ]
})
