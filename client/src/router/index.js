import Vue from 'vue'
import Router from 'vue-router'
import ChooseCurrentPower from '@/components/ChooseCurrentPower'
import KWToAmps from '@/components/KWToAmps'
import AmpsToKW from '@/components/AmpsToKW'

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
      path: '/current',
      name: 'AmpsToKW',
      component: AmpsToKW
    }
  ]
})
