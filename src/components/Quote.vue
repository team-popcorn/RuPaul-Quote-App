<template>
  <li>
    <p>
      &#34;Test&#34;
    </p>
    - <em> Author </em>
    <button class="btn btn-rmv" v-on:click="deleteQuote(quote)">X</button>
    <hr>
  </li>
</template>
<script>

export default {
  components: {
  },
  data () {
    return {
    }
  },

  computed: {
  },

  created () {
  },

  methods: {
    deleteQuote (quote) {
      this.$store.dispatch('removeFromList', quote)
      this.$store.dispatch('fetchQuotes')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-rmv{
  display: inline;
  border: none;
  background: #fe67e3;
  color: white;
  font-weight: 800;
}
</style>
