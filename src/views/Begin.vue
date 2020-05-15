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
  name: 'Begin',
  components: {
    Book
  },
  props: ['reverse', 'next'],
  data() {
    return {
      title: "O Início",
      store: store,
    }
  }
}

const store = `
Era só brincadeira... Em um dia - não qualquer - de agosto, em 2015, a noite, estava eu (Lucas Emanuel) instruindo um pelotão formado por desbravadores (criaturas que usam lenço amarelo) pois ao final daquele mesmo ano iríamos participar de um competição e estávamos treinando para ela.</br>
Neste dia a instrução foi encerrada mais cedo, pois a mãe de uma desbravadora tinha feito um convite para o clube participar da festinha de aniversário de sua filha. Estando todos na casa de Marla (ela que tava fazendo 15 aninhos), começaram a servir as comidas de festa e logo após foi a hora de partir o bolo, mas antes do bolo vem o ‘parabéns’. Êêê...<br>
"Parabéns para você... Muitos anos de vida. Com quem será?... Vai depender se <strong>Lucas</strong> (Eu? sim!) vai querer?<br>
Nessa hora, eu pensei que iam chamar pelo um amigo meu, mas não, foi eu mesmo. 
Depois da festa um tio dela ficou fazendo resenha, e foi a partir deste dia que eu tentei me tornar amigo Marla<sup>hoje minha princesa</sup>.
`;

</script>

<style scoped>
  >>> div.img {
    background: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, .75)), url('https://live.staticflickr.com/65535/49895877421_5f3de299f8_b.jpg');
    background-repeat: no-repeat;
    background-position: center 30%;
    background-size: cover;
  }
</style>