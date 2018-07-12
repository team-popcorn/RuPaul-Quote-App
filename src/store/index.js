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
    quotes: []
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
      // push new quote to list
      console.log(quote)
      context.commit('addQuote', quote)
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
      // check if quote already exists
      if (state.quotes.indexOf(quote) !== 0) {
        // add quote to list
        state.quotes.push(quote)
      } else {
        console.log('Duplicate entry')
      }
    },
    removeQuote (state, quote) {
      // remove quote from list
      state.quotes.splice(state.quotes.indexOf(quote), 1)
    }
  }
})
