<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}

a {
  display: block;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 24px;
  padding: 18px;
  border: 2px solid #fff;
  box-sizing: border-box;
  border-radius: 2px;
  text-decoration: none;
}
</style>
