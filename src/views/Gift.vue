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
      title: "Meu presente",
      store: store,
    }
  }
}

const store = `
Recentemente completei mais um ano de vida, hoje estou com 22, mediante situação que estamos passando com a pandemia da COVID-19 não pude convidar a minha pretinha para comer bolo, foi somente eu, meus pais e meu irmão, por consequência eu também não ganhei presente, :( aaah…<br>
Então parei um pouco para pensar e vi que estava sendo mal agradecido, pois, em 2016 ganhei um PRESENTÃO, e não tenho mais que ficar pedindo nada, o que tenho hoje é o que vou continuar tendo pois o presente que ganhei é vitalício.
Só que para ganhá-lo tive que participar de um amigo <i>não</i> secreto, com somente duas pessoas, onde a outra pessoa já sabia quem iria presenteá-la e já sabia o presente que iria receber e só estava esperando o dia para entregar. Ela me foi entregue, e eu me entreguei a ela.<br>
Reciprocidade na raiva e no ódio é fácil, <i>mas ela deixar mais fácil ainda reciprocidade no cuidado, no carinho e amor</i>.<br>
Preta, não há presente maior neste mundo do que você.
`;

</script>

<style scoped>
  >>> div.img {
    background: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, .75)), url('https://live.staticflickr.com/65535/49896043677_6bf5344cea_b.jpg');
    background-repeat: no-repeat;
    background-position: left;
    background-size: cover;
  }
</style>