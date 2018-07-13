<template>
  <div class="quote-list">
    <h1>{{ title }}</h1>
    <h3>{{ subtitle }} </h3>
    <div>
      <div id="quotes" v-if="loading">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="lds-spinner" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="background: none;"><g transform="rotate(0 50 50)">
            <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fefbfe">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"/>
            </rect>
          </g><g transform="rotate(30 50 50)">
            <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fefbfe">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"/>
            </rect>
          </g><g transform="rotate(60 50 50)">
            <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fefbfe">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"/>
            </rect>
          </g><g transform="rotate(90 50 50)">
            <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fefbfe">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"/>
            </rect>
          </g><g transform="rotate(120 50 50)">
            <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fefbfe">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"/>
            </rect>
          </g><g transform="rotate(150 50 50)">
            <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fefbfe">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"/>
            </rect>
          </g><g transform="rotate(180 50 50)">
            <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fefbfe">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"/>
            </rect>
          </g><g transform="rotate(210 50 50)">
            <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fefbfe">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"/>
            </rect>
          </g><g transform="rotate(240 50 50)">
            <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fefbfe">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"/>
            </rect>
          </g><g transform="rotate(270 50 50)">
            <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fefbfe">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"/>
            </rect>
          </g><g transform="rotate(300 50 50)">
            <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fefbfe">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"/>
            </rect>
          </g><g transform="rotate(330 50 50)">
            <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fefbfe">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"/>
            </rect>
          </g>
        </svg>
      </div>
      <ul v-else>
        <Quote></Quote>
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
      <input id="quote-input" type="text" v-model="inputValQuote" placeholder="Quote" >
      <input id="author-input" type="text" v-model="inputValAuthor" placeholder="Author">
      <button class="btn btn-primary" v-on:click="addQuote(inputValQuote, inputValAuthor)">Add</button>
    </div>
    <li class="router"><router-link to="/">Back to a random quote from your favourite drag queen</router-link></li>
  </div>
</template>
<script>
import Quote from '@/components/Quote'

export default {
  name: 'QuoteList',
  components: {
    Quote
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
    this.$store.watch(
      function (state) {
        return state.quotes
      },
      function () {
        localStorage.setItem('quotes', JSON.stringify(this.$state.quotes))
      },
      {
        deep: true // add this if u need to watch object properties change etc.
      }
    )
  },

  methods: {
    addQuote (inputValQuote, inputValAuthor) {
      let quote = {'author': inputValAuthor, 'quote': inputValQuote}
      this.$store.dispatch('addToList', quote)
      this.loading = true
      // eslint-disable-next-line
      this.$store.dispatch('fetchQuotes').then(() => this.loading = false)
    },
    deleteQuote (quote) {
      this.$store.dispatch('removeFromList', quote)
      this.$store.dispatch('fetchQuotes')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#quote-input-block {
  margin: 50px 0px;
}
.quote-list {
  box-sizing: border-box;
  width: 600px;
  height: fit-content;
  margin: auto;
  background: #fe67e3;
  padding: 10px 10px 80px 10px;
  margin-bottom: 100px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

}
#quotes{
  transition-timing-function: ease-in;
  -webkit-transition: height 2s; /* Safari */
  transition: height 100s;
}
.btn-rmv{
  display: inline;
  border: none;
  background: #fe67e3;
  color: white;
  font-weight: 800;
}
.router {
  padding: 10px;
  width: 50%;
  margin: auto;
  border: solid 2px white;
  border-radius: 15px;
}
.router a {
  color: white;
  text-decoration: none;
}

</style>
