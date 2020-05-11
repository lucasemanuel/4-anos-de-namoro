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
  body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, .75)), url("https://live.staticflickr.com/65535/49882402503_e1306a2076_b.jpg");
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    backdrop-filter: blur(4px) grayscale(100%);
  }

  main {
    color: #fff;
    max-width: 720px;
    margin: 0 auto;
  }

  section {
    margin-top: 200px;
  }

  hr {
    height: 3.5px;
    border-color: black;
    border-width: 0;
    border-radius: 32px;
    background: #fff;
    max-width: 720px;
    margin: 0 16px;
  }

  h1 {
    font-family: var(--main-font);
    font-weight: normal;
    font-size: 72px;
    text-align: center;
    margin: 28px 0;
  }

  p {
    font-family: var(--text-font);
    font-size: 24px;
    text-align: center;
    letter-spacing: 0.1em;
  }

  a {
    color: #fff;
    font-family: var(--text-font);
    font-weight: bold;
    margin: 120px auto 0;
    max-width: 190px;
    text-align: center;
    transition: 1s;
 }

  a:hover {
    border-radius: 12px;
    border-color: transparent;
    color: #000;
    background: #fff;
    box-shadow: 0px 0px 2px #fff;
  }

 @media (max-width: 800px) {
   section {
    margin-top: 160px;
   }
 }

 @media (max-width: 600px) {
    body {
      backdrop-filter: blur(3px) grayscale(100%);
    }

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