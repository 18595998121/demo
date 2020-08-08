import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import sy from '@/components/sy'
import xj from '@/components/xj'
import ty from '@/components/ty'
import qz from '@/components/qz'
import gr from '@/components/gr'
import xq from '@/components/xq'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	
      path: '/xj',
      
      component: xj
    },
    {
    	
      path: '/gr',
      
      component: gr
    },
    {
    	
      path: '/qz',
      
      component: qz
    },
    {
    	
      path: '/ty',
      
      component: ty
    },
    {
    	
      path: '/sy',
      
      component: sy
    },
    {
    	
      path: '/xq',
      
      component: xq
    },
    
    {
    	
      path: '/',
      redirect:'/sy',
      component: sy
    }
    
    
  ]
})
