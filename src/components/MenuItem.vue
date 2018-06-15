<template>
  <div class="card">
    <img class="card-img-top" :src="item.images[0].fields.file.url" alt="">
    <div class="card-body">
      <h5 class="card-title">{{ item.name }}</h5>
      <div class="card-text">{{ item.description }}</div>
      <div class="card-text">{{ item.price }} DKK</div>
      <div class="card-text">{{ item.type.fields.title }}</div>
      <button class="btn btn-primary" @click="addToCart(item)">BAI NAU</button>
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
