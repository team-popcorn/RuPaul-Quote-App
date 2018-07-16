<template>
    <div class="quote-list">
      <div v-if="loading">
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
      <div class="random-quote" v-else>
        <p>
            &#34;{{quotes[index].quote}}&#34;
        </p>
        - <em>{{quotes[index].author}}</em>
        <div id="quote-generate">
          <button class="btn btn-primary" v-on:click="nextQuote()">Update</button>
        </div>
      </div>
      <li class="router"><router-link to="/QuoteList">Add your own Rupaul Quotes</router-link></li>
    </div>
</template>
<script>

export default {
  name: 'random-quote',
  data () {
    return {
      randomQuote: 0
    }
  },
  props: {
    loading: {
      type: Boolean
    },
    quotes: {
      type: Array
    }
  },
  methods: {
    nextQuote () {
      // eslint-disable-next-line
      this.$store.dispatch('updateIndex')
    }
  },
  computed: {
    index () {
      return this.$store.getters.randomIndex
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../scss/randomQuote.scss'
</style>
