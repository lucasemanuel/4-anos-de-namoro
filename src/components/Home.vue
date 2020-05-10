<template>
  <main>
    <section>
      <hr>
      <h1>Lucas & Marla</h1>
      <hr>
      <p> - 14 de Maio, 2016 - </p>
      <!-- <p> Já faz 4 anos... </p> -->
    </section>
    <a href="#">INÍCIO</a>
  </main>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=PT+Serif&family=Rufina&display=swap');
  /* font-family: 'PT Serif', serif; */
  /* font-family: 'Rufina', serif; */

  body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  main {
    max-width: 720px;
    margin: 0 auto;
  }

  section {
    margin-top: 200px;
  }

  hr {
    height: 5px;
    border-width: 0;
    border-radius: 32px;
    background: black;
    max-width: 720px;
    margin: 0 16px;
  }

  h1 {
    font-family: 'Rufina', serif;
    font-weight: normal;
    font-size: 72px;
    text-align: center;
    margin: 28px 0;
  }

  p {
    font-size: 24px;
    text-align: center;
    letter-spacing: 0.1em;
  }

  a {
    margin: 120px auto 0;
    max-width: 190px;
    text-align: center;
 }

 @media (max-width: 800px) {
   section {
    margin-top: 160px;
   }
 }

 @media (max-width: 600px) {
    h1 {
      font-size: 54px;
      margin: 16px 16px;
    }

    hr {
      height: 3px;
    }
 }

 @media (max-width: 420px) {
  section {
    margin-top: 130px;
  }
  
  a {
      margin-top: 80px;
   }
 }

</style>