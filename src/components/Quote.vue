<li v-for="quote in quotes" :key="quote.quote">
    <p>
    &#34;{{quote.quote}}&#34;
    </p>
    - <em> {{quote.author}} </em>
    <button class="btn btn-rmv" v-on:click="deleteQuote(quote)">X</button>
    <hr>
</li>