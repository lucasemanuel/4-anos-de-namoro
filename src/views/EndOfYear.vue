<template>
  <Book :title="title"
    :store="store"
    :reverse="reverse"
    :next="next"
  />
</template>

<script>
import Book from '../components/Book.vue';

export default {
  name: 'EndOfYear.vue',
  components: {
    Book
  },
  props: ['reverse', 'next'],
  data() {
    return {
      title: "Fim de ano",
      store: store,
    }
  }
}

const store = `
  Um pequena resenha que deu grandes resultados... Em um dia - não qualquer - de agosto, em 2015 estava eu (Lucas Emanuel) instruindo um pelotão formado por desbravadores (criaturas que usam lenço amarelo) pois ao final daqueles mesmo ano iriamos participar de um competição e precisavos treinar muito para vence-la.</br>
  Neste dia a instrução encerrou mais cedo, pois a mãe de uma desbravadora tinha feito um convite para o clube participar da festinha de aniversário de sua filha, então fomos todos. Estando todos na casa de Marla (ela que tava fazendo 15 aninhos), serviram as comidas de festa e logo apos foi a hora do parabéns.<br>
  "Parabéns para você... Muitos anos de vida. Com quem será?... Vai depender se <strong>Lucas</strong> (Eu? sim!) vai querer?<br>
  Eu ainda fiquei com dúvida por varios meses, mas, há quatro anos eu tive a certeza, e disse, vai depender dela, porque eu já tô decidido!
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