<template>
  <div id="app">
    <img id="rupaul-header" src="./assets/rupaul.jpg">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
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
