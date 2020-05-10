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
:root {
  --medium: 800px;
  --small: 800px;
}

body {
  margin: 0px;
  padding: 0px;
}

a {
  display: block;
  color: #000;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 24px;
  padding: 18px;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 2px;
}
</style>
