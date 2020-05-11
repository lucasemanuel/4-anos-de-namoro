<template>
  <div id="app">
    <router-view></router-view>
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
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400&family=Rufina&display=swap');

:root {
  --main-font: 'Rufina', serif;
  --text-font: 'Raleway', sans-serif;
}

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
