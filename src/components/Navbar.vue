<template>
  <nav>
    <ul>
      <li><router-link to="/"></router-link></li>
      <li><router-link to="begin"></router-link></li>
      <li><router-link to="/bye"></router-link></li>
      <li><router-link to="/courtship"></router-link></li>
      <li><router-link to="/gift"></router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  mounted() {
    this.setActiveItemNavbar();
  },
  methods: {
    setActiveItemNavbar() {
      const path = this.$route.path;
      const el = document.querySelector("[href='#" + path + "']");
      el.classList.add('active');
    }
  }
}
</script>

<style scoped>
  a {
    padding: 0;
    border: none;
  }

  nav ul {
    padding: 0;
    margin: 0;
    margin-top: 24px;
  }

  nav ul li {
    flex: 1;
    display: inline-block;
  }

  nav ul li a{
    width: 20px;
    height: 20px;
    border: 2px solid #000;
    border-radius: 2px;
    transition: 1s;
  }

  nav ul li a.active, nav ul li a:hover {
    border-radius: 3px;
    background: #000;
    box-shadow: 0px 0px 2px #000;
  }

  nav ul li:not(:last-child) {
    margin-right: 16px;
  }
</style>