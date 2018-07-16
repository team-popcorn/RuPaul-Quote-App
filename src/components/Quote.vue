<template>
  <li>
    <p>
      &#34;{{quote.quote}}&#34;
    </p>
    - <em> {{quote.author}} </em>
    <button v-on:click="deleteQuote(quote)">X</button>
    <hr>
  </li>
</template>
<script>

export default {
  props: {
    quote: {
      type: Object
    }
  },
  methods: {
    deleteQuote (quote) {
      this.$store.dispatch('removeFromList', quote)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../scss/quote.scss'
</style>
