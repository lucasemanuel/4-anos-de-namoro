<template>
  <main :class="{ reverse: reverse }">
    <section :class="{ reverse: reverse }">
      <Navbar/>
      <h1 class="title">{{ title }}</h1>
      <hr>
      <p>{{ store }}</p>
      <router-link to="/">Próxima</router-link>
    </section>
    <div class="img" :class="{ reverse: reverse }"></div>
  </main>
</template>

<script>
import Navbar from './Navbar.vue';

export default {
  name: 'Book',
  components: {
    Navbar
  },
  props: [
    'store',
    'title',
    'reverse',
    'photo',
    'stylePhoto'
  ],
}
</script>

<style scoped>
  main {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main.reverse {
    flex-direction: column-reverse;
  }
  
  section {
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
  }

  section h1 {
    font-family: var(--main-font);
    font-style: normal;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0.1em;
    font-weight: 500;
    font-size: 28px;
    text-align: center;
    text-transform: uppercase;
    margin: 40px 0 10px;
  }

  section hr {
    padding: 1px 0;
    background: #000;
    border-width: 0;
    border-radius: 64px;
    width: 50%;
    margin: 0 16px;
    text-align: center;
  }

  section p {
    margin: 32px 10% 0;
    font-family: var(--text-font);
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    text-align: center;
    overflow-y: scroll;
  }

  section a {
    color: #000;
    font-family: var(--text-font);
    font-weight: bold;
    text-align: center;
    padding: 14px 36px;
    margin: 32px;
    border-color: #000;
    transition: 1s;
  }

  section a:hover {
    border-radius: 12px;
    border-color: transparent;
    color: #fff;
    background: #000;
    box-shadow: 0px 0px 2px #000;
  }

  div.img {
    height: 50vh;
  }

  @media (min-width: 800px) {
    main {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    main.reverse {
      grid-auto-flow: dense;
    }

    main div.reverse {
      grid-column: 1;
    }

    main section.reverse  {
      grid-column: 2;
    }

    section, div.img {
      height: 100vh;
    }

    section a {
      margin: 64px 0;
    }
  }
</style>