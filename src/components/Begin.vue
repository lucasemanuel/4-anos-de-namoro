<template>
  <main>
    <section>
      <nav>
        <ul>
          <li></li>
          <li class="active"></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
      <h1>O INÍCIO</h1>
      <hr>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore, facilis eaque tenetur dolore sunt doloremque fugiat error laborum porro eum soluta eveniet impedit. Exercitationem, odit. Error sint omnis quo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iusto, temporibus eius quod laudantium ut odit suscipit nemo ab animi ea atque dolore, cumque vitae architecto? Doloremque deleniti eum saepe? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, odio. Voluptas, reiciendis voluptates. Nisi delectus quis enim, et ipsam dolorum sit reprehenderit dicta adipisci minima consequatur assumenda id voluptatum sint? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quos ducimus, reiciendis incidunt sit autem voluptatibus magni amet! Corporis ullam, possimus odio dolores non omnis quisquam itaque voluptatum incidunt quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos inventore consequatur ea ipsa repellat natus neque nam, aperiam est architecto obcaecati perferendis! Vero quisquam error quas ad aperiam vitae fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, deserunt! Fuga doloribus saepe rem necessitatibus veritatis, commodi, aliquam corrupti debitis itaque quidem sequi iusto inventore hic quas nesciunt earum exercitationem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eos alias illum, nesciunt ipsum, quae placeat voluptatum dolores explicabo minus voluptatem, porro exercitationem a error debitis quasi neque fuga incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tenetur quae labore voluptate quisquam eius eos. Sunt animi, sint sed tempora tempore nulla voluptates fuga quae praesentium, ex illum nemo.</p>
      <router-link to="/">Próxima</router-link>
    </section>
    <div class="img"></div>
  </main>
</template>

<script>
export default {
  name: 'Begin',
}
</script>

<style scoped>
  main {
    height: 100vh;
    display: flex;
    flex-direction: column-reverse;
  }
  
  section {
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
  }

  section nav {
    align-self: flex-end;
  }

  section nav ul {
    padding: 0;
    margin: 0;
    margin-top: 26px;
    margin-right: 40px;
  }

  section nav ul li {
    flex: 1;
    width: 16px;
    height: 16px;
    border: 1px solid #000;
    border-radius: 1px;
    display: inline-block;
  }

  section nav ul li.active {
    background: #000;
  }

  section nav ul li:not(:last-child) {
    margin-right: 16px;
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
    margin: 40px 0 10px;
  }

  section hr {
    height: 2px;
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
    background: #c4c4c4;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    backdrop-filter: grayscale(100%);
  }

  @media (min-width: 800px) {
    main {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    section, div.img {
      height: 100vh;
    }

    

    section a {
      margin: 64px 0;
    }
  }
</style>