<template>
  <div id="app">
    <img id="rupaul-header" src="./assets/rupaul.jpg">
    <router-view/>
  </div>
</template>

<script>
import QuoteList from './components/QuoteList'

export default {
  name: 'App',
  components: {
    QuoteList
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
</style>
