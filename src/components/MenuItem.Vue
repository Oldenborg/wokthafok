<template>
  <div class="menu-item">
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="{{ item.image }}">
      <div class="card-body">
        <h5 class="card-title">{{ item.name }}</h5>
        <p class="card-text">{{ item.description }}</p>
        <button class="btn btn-primary">I buy this item</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MenuItem',
    props: {
      item: {},
      required: true,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
