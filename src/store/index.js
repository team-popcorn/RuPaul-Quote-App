/*
index for store
*/

import Vue from 'vue'
import Vuex from 'vuex'
import quotes from '@/api/quotes'
// import resolve from 'dns'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // = data
    quotes: [],
    randomQuote: {}
  },

  getters: { // = computed properties
    rupaulQuotes (state, getters) {
      return state.quotes.filter(quote => quote.author === 'Rupaul')
    }
  },

  actions: { // make AJAX call
    fetchQuotes (context) {
      return new Promise((resolve, reject) => {
        // make the call
        quotes.getQuotes(quotes => {
          // run setQuotes mutation
          context.commit('setQuotes', quotes)
          // resolve promise
          resolve()
        })
      })
    },
    addToList (context, quote) {
      console.log(context.state.quotes)
      try {
        // check if quote already exists
        for (var item in context.state.quotes) {
          if (context.state.quotes[item].quote === quote.quote) {
            console.log('Duplicate')
            return
          }
        }
        context.commit('addQuote', quote)
      } catch (e) {
        console.log(e)
      }
    },
    removeFromList (context, quote) {
      // remove quote from list
      context.commit('removeQuote', quote)
    }
  },

  mutations: { // single state changes
    setQuotes (state, quotes) {
      // update quote list
      state.quotes = quotes
    },
    addQuote (state, quote) {
      // push new quote to list
      state.quotes.push(quote)
    },
    removeQuote (state, quote) {
      // remove quote from list
      state.quotes.splice(state.quotes.indexOf(quote), 1)
    }
  }
})
