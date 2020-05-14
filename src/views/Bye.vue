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
  name: 'Bye',
  components: {
    Book
  },
  props: ['reverse', 'next'],
  data() {
    return {
      title: "Se dispersa",
      store: store,
    }
  }
}

const store = `
Estava eu resenhando com João <s>não brow</s> (nesta época eu já era amiguinho daquela jovem), e descubro que ele é primo daquela jovenzinha e que a namorada dele <strong>na época, </strong> <sup> não tô querendo discórdia com a esposa dele</sup> tinha certa proximidade da garota, a partir dessa descoberta, combinamos de sair juntos nós quatro. O problema era, pedir a mãe de Marla para ela sair conosco. Pedir, eu poderia, mas coragem não tinha, kkkk, mas no final das contas alguém pediu (não me lembro quem pediu) e a coroa deixou.<br>
Saímos, comemos, conversamos só eu e a jovem… conversamos… conversamos um pouco mais, e então descemos todos para minha minha casa, ao chegarmos aconteceu o seguinte, >:( isso me deixou com tanta raiva naquele dia, eu queria passar mais tempo conversando com marla, mas a criatura, ex de João, nem esperou pisar no batente da minha casa para chamar um mototáxi para deixar Marla em casa.
Eu não queria que Marla fosse naquela hora, desejava ficar um tempo a mais com ela.<br>
Naquele dia, há mais de quatro anos, eu tive que me despedir da minha linda e ainda tenho, mas espero o dia, onde eu possa viver sempre ao seu lado.
`;

</script>

<style scoped> 
  >>> div.img {
    background: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, .75)), url('https://live.staticflickr.com/65535/49895734261_3b4c96a3cd_b.jpg');
    background-repeat: no-repeat;
    background-position: 40%;
    background-size: cover;
  }
</style>