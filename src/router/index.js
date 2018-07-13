import Vue from 'vue'
import Router from 'vue-router'
// import QuoteList from '@/components/QuoteList'
// import MainPage from '@/components/MainPage'
import RandomQuote from '@/components/RandomQuote'
import QuoteList from '@/components/QuoteList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RandomQuote',
      component: RandomQuote
    },
    {
      path: '/QuoteList',
      name: 'QuoteList',
      component: QuoteList
    }
  ]
})
