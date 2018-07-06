<template>
  <div class="quote-list">
    <h1>{{ title }}</h1>
    <h3>{{ subtitle }} </h3>
    <div>
      <ul>
        <li v-for="quote in quotes" :key="quote.quote">
          <p>
            &#34;{{quote.quote}}&#34;
          </p>
            - <em> {{quote.author}} </em>
            <button class="btn btn-rmv" v-on:click="deleteQuote(quote)">X</button>
            <hr>
        </li>
      </ul>
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
      quotes: [
        {'author': 'Rupaul', 'quote': 'If you can’t love yourself how in the hell you gonna love somebody else.'},
        {'author': 'Rupaul', 'quote': 'What other people think of you is none of your business.'},
        {'author': 'Rupaul', 'quote': 'Throwing shade takes a bit of creativity, being a bitch takes none'},
        {'author': 'Rupaul', 'quote': 'Look at me — a big old black man under all of this makeup, and if I can look beautiful, so can you'},
        {'author': 'Rupaul', 'quote': 'When you become the image of your own imagination, it’s the most powerful thing you could ever do.'},
        {'author': 'Rupaul', 'quote': 'Expectations lead to resentments and when you allow people to just be themselves the relationship can really grow'},
        {'author': 'Rupaul', 'quote': 'Dont F*** it up!'}
      ],
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
