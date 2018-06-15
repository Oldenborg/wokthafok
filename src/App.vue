<template>
  <div id="app" class="container">
    <div class="logo">
      <img src="./assets/logo.png" width="400px">
    </div>
    <ul class="nav justify-content-center">
      <router-link active-class="active" tag="li" to="/" class="nav-item"><a class="nav-link">Home</a>
      </router-link>
      <router-link active-class="active" tag="li" to="/menu" class="nav-item"><a class="nav-link">Menu</a>
      </router-link>
      <router-link active-class="active" tag="li" to="/contact" class="nav-item"><a class="nav-link">Contact</a>
      </router-link>
      <router-link active-class="active" tag="li" to="/cart" class="nav-item"><a class="nav-link">Cart</a>
      </router-link>
    </ul>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style lang="sass">
  @import ../node_modules/bootstrap/scss/bootstrap
  html, body
    background: url('./assets/bg.jpg')
    width: 100%
    height: 100%

  #app
    background: white

  .logo
    text-align: center
</style>
