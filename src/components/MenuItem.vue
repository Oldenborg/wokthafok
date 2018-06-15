<template>
  <div class="menu-item">
    <div class="card" style="width: 18rem;">
      <ul>
        <li v-for="image in item.images" :key="image.fields.file.fileName">
          <img width="100%" :src="image.fields.file.url" alt="">
        </li>
      </ul>
      <div class="card-body">
        <h5 class="card-title">{{ item.name }}</h5>
        <div class="card-text">{{ item.description }}</div>
        <div class="card-text">{{ item.price }} DKK</div>
        <div class="card-text">{{ item.type.fields.title }}</div>
        <button class="btn btn-primary" :click="addToCart">I buy this item</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'MenuItem',
    props: {
      item: {
        images: {}
      },
      required: true,
    },
    methods: {
      ...mapActions({
        addToCart: 'addToCart'
      })
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
