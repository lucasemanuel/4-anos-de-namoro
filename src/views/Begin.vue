<template>
  <Book :title="title"
    :store="store"
    :reverse="reverse"
  />
</template>

<script>
import Book from '../components/Book.vue';

export default {
  name: 'Begin',
  components: {
    Book
  },
  props: ['reverse'],
  data() {
    return {
      title: "Inicio",
      store: store,
    }
  }
}

const store = `
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Tempora modi repellendus necessitatibus maiores. Quod voluptatibus lab
  orum adipisci nobis sint magnam officia odit facilis expedita qui, magni min
  ima iusto est ut!Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Tempora modi repellendus necessitatibus maiores. Quod voluptatibus lab
  orum adipisci nobis sint magnam officia odit facilis expedita qui, magni min
  ima iusto est ut!
`;

</script>

<style>
  div.img {
    background: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, .75)), url("https://live.staticflickr.com/65535/49882402503_e1306a2076_b.jpg");
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
  }
</style>