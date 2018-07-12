<template>
  <div class="quote-list">
    <h1>{{ title }}</h1>
    <h3>{{ subtitle }} </h3>
    <div>
      
    </div>
    <div id="quote-input-block">
      <input id="quote-input" type="text" v-model="input_val_quote" placeholder="Quote" >
      <input id="author-input" type="text" v-model="input_val_author" placeholder="Author">
      <button class="btn btn-primary" v-on:click="addQuote()">Add</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'to-do',
  data () {
    return {
      title: 'You Better Work!',
      subtitle: '#wordstoliveyourlifeby',
      input_val_quote: '',
      input_val_author: ''
    }
  },
  methods: {
    addQuote () {
      this.quotes.push({'author': this.input_val_author, 'quote': this.input_val_quote})
    },
    deleteQuote (quote) {
      this.quotes.pop(quote)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
#quote-input-block {
  margin: 50px 0px;
}
.quote-list {
  box-sizing: border-box;
  width: 600px;
  margin: auto;
  background: #fe67e3;
  padding: 10px 10px 80px 10px;
  margin-bottom: 100px;
}
.btn-rmv{
  display: inline;
  border: none;
  background: #fe67e3;
  color: white;
  font-weight: 800;
}
</style>
