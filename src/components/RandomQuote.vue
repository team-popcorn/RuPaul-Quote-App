<template>
    <div class="quote-random">
            <!--<p>
                &#34;{{quote.quote}}&#34;
            </p>
            - <em> {{quote.author}} </em>-->
            JSON.parse({{ quotes }})
        <div id="quote-generate">
        <button class="btn btn-primary" v-on:click="updateQuote()">Update</button>
        </div>
    </div>
</template>
<script>

export default {
  name: 'random-quote',
  data () {
    return {
    }
  },
  methods: {
    updateQuote () {
    }
  },
  computed: {
    quotes () {
      return this.$store.state.quotes
    }
  }
}
</script>

<style scoped>

</style>
