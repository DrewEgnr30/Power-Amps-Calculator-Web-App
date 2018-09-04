import Vue from 'vue'
import Router from 'vue-router'
import ChooseCurrentPower from '@/components/ChooseCurrentPower'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ChooseCurrentPower',
      component: ChooseCurrentPower
    }
  ]
})
