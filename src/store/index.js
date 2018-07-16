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
    index: 0
  },

  getters: { // = computed properties
    rupaulQuotes (state, getters) {
      return state.quotes.filter(quote => quote.author === 'Rupaul')
    },
    randomIndex (state, getters) {
      return state.index
    }
  },

  actions: { // make AJAX call
    fetchQuotes (context) {
      return new Promise((resolve, reject) => {
        // if no local storage file take from the store
        if (localStorage.getItem('quotes')) {
          // run setQuotes mutation with local storage
          context.commit('setQuotes', JSON.parse(localStorage.getItem('quotes')))
        } else {
          quotes.getQuotes(quotes => {
            // run setQuotes mutation with api
            context.commit('setQuotes', quotes)
            // resolve promise
            resolve()
          })
        }
        // resolve promise
        resolve()
      })
    },
    setIndex (context) {
      // run getIndex mutation
      context.commit('setIndex', context.state.index)
    },
    updateIndex (context) {
      if (context.state.index > context.state.quotes.length - 2) {
        context.commit('indexZero')
      } else {
        context.commit('indexIncrement')
      }
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
    },
    setIndex (state) {
      state.index = Math.floor(Math.random() * state.quotes.length)
    },
    indexZero (state) {
      state.index = 0
    },
    indexIncrement (state) {
      state.index += 1
    }
  }
})
