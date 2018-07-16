<template>
  <div id="app">
    <img id="rupaul-header" src="./assets/rupaul.jpg">
    <router-view/>
  </div>
</template>

<script>
import QuoteList from '@/components/QuoteList'
import Quote from '@/components/Quote'
import RandomQuote from '@/components/RandomQuote'

export default {
  name: 'App',
  components: {
    QuoteList,
    Quote,
    RandomQuote
  },
  mounted () {
    console.log('App mounted!')
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
    // logic to check for local storage file and push to store

    // if no local storage file take from the store
    // eslint-disable-next-line
    this.$store.dispatch('fetchQuotes').then(() => this.loading = false)

    // watch for change in store and update local storage
    this.$store.watch(
      function (state) {
        localStorage.setItem('quotes', JSON.stringify(state.quotes))
      }
    )
  }
}
</script>

<style>
#app {
  font-family: 'Roboto Mono', monospace;
  text-align: center;
  color: #FFF;
  margin-top: 60px;
}
#rupaul-header {
  width: 600px;
  margin: auto;
  position: relative;
  top: 10px;
  border-bottom: solid 2px #e237c4;
  box-shadow: 0px -11px 20px 0px #fff6fe;
}
h1 {
  font-family: 'Monoton', cursive;
  font-weight: normal;
  font-stretch: ultra-expanded;
}
h3 {
  font-style: italic;
  font-family: 'Shrikhand', cursive;
  letter-spacing: 1px;
}
ul {
  /*list-style-type: none;*/
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
input , button{
  font-family: 'Roboto Mono', monospace;
}
hr {
    border: none;
    border-bottom: solid 1px #ffffff66;
}
</style>
