<template>
  <div id="app">
    <img id="rupaul-header" src="./assets/rupaul.jpg">
    <router-view :quotes="quotes" :loading="false" />
  </div>
</template>

<script>
import RandomQuote from '@/views/RandomQuote'
import QuoteList from '@/views/QuoteList'

export default {
  name: 'App',
  components: {
    RandomQuote,
    QuoteList
  },

  data () {
    return {
      title: 'You Better Work!',
      subtitle: '#wordstoliveyourlifeby',
      inputValQuote: '',
      inputValAuthor: 'Rupaul',
      loading: false
    }
  },

  computed: {
    quotes () {
      return this.$store.getters.rupaulQuotes
    }
  },

  created () {
    this.loading = true
    // eslint-disable-next-line
    this.$store.dispatch('fetchQuotes').then(() => this.loading = false)

    // watch for change in store and update local storage
    this.$store.watch(
      function (state) {
        localStorage.setItem('quotes', JSON.stringify(state.quotes))
      }
    )
  },

  mounted () {
    console.log('App mounted!')
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
