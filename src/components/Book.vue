<template>
  <main :class="{ reverse: reverse }">
    <section :class="{ reverse: reverse }">
      <Navbar/>
      <h1 class="title">{{ title }}</h1>
      <hr>
      <p v-html="store"></p>
      <footer>
        <router-link :to="{ path: next }">Próximo</router-link>
      </footer>
      <!-- <router-link :to="{ path: next }">Próximo</router-link> -->
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
    'next'
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
    height: 60vh;
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
    margin: 24px 0 10px;
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
    margin: 24px 10% 0;
    font-family: var(--text-font);
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    text-align: center;
    overflow-y: scroll;
  }

  section footer {
    align-items: flex-end;
    display: flex;
    flex: 1;
  }

  section a {
    color: #000;
    font-family: var(--text-font);
    font-weight: bold;
    text-align: center;
    padding: 14px 36px;
    margin: 24px;
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
    height: 40vh;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
    border-radius: 1px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 1px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
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

    section h1 {
      margin: 40px 0 10px;
    }

    section p {
      margin: 32px 10% 0;
    }

    section, div.img {
      height: 100vh;
    }
  }
</style>