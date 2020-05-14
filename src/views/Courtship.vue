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
      title: "Namorar?",
      store: store,
    }
  }
}

const store = `
Com 18 anos, eu só queria estudar e arrumar um trabalho, namorar estava fora dos planos (pobre garoto, mau sabe o que lhe espera) mesmo tendo uma amizade especial com Marla.<br>
Nos <sup> Eu e Marla </sup> participamos de atividades em comum. Certo dia, em uma viagem ela ficou presa no cinto do ônibus, kkkk, foi engraçado, ela precisa de homem com braços fortes, capaz de livrá-la daquele cinto de segurança maléfico, quem se prepara para ir? Lucas! Um garoto magrelo, da boca de lata, com os braços mais finos que um palito de churrasco, mas conhecido como <i>bode</i>, mesmo com suas <i>anti-qualidades</i> ele ajuda Marla e a liberta do cinto. Em outro dia Marla entrou novamente em apuros, estava ela apanhando para uma pizza, kkkk, marlinha tem muitas qualidades, mas o garfo e a faca juntos na mão dela só brigam, o que sai de faísca coloca a metalúrgica no chinelo, quem novamente aparece para salvá-la? Lucas, ele vai e corta pizza para ela.<br>
Dava já para perceber, é, isso mesmo que estão pensando, eu estava apaixonado. Nós nos víamos bastante, além disso eu comecei a ir na casa dela, conheci a mãe dela <sup>que hoje chamo de sogra</sup>, a preta estava se tornando a minha melhor amiga.<br>
Eu não sabia, mas já estava namorando com ela, se não tivessem me falado:
<blockquote> - Lucas, você já está namorando! Isso não é uma pergunta, é uma afirmação. Todos vêem isso menos você e ela. </blockquote>
Cara, eu sou um lesma, sou muito lento, ai foi depois dessas palavras que criei coragem e pedi a menina em namoro, ownnnn. :3. Uma semana depois fui pedir a mãe e ao padrasto, era um sábado de tarde, o dia tava nublado, me lembro como se fosse a quatro anos atrás. Eu cheguei na casa de Marla, de peito estufado e disse <s>“Dona Vitoria e seu Edilson, vim namorar com sua filha, quelé? alguma objeção?”</s> “, kkkk, não foi nada disso, conversamos e os coroas dela liberam o namoro.<br>
Desde aquele dia e também dos antecessores minha vida mudou, comecei a crescer, amadurecer, ter a noção que tem uma vida, que pode não dividir a mesma casa, mas divide o mesmo sentimento que só cresce<sup>mais que o algoritmo do caixeiro-viajante</sup>.E hoje eu só agradeço porque você ocupa um espaço que ninguém nunca ocupou, você preencheu um vazio e fez vida onde não tinha, é pouco falar “Eu te amo” pelo muito que é para mim.
`;

</script>

<style scoped>
  >>> div.img {
    background: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, .75)), url('https://live.staticflickr.com/65535/49895734526_74ddfe5216_b.jpg');
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
  }
</style>