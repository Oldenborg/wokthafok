<template>
  <div v-if="!loading" class="home-page">
    <h2>{{ page.fields.title }}</h2>
    <p>{{ page.fields.content }}</p>
    <ul v-if="this.hasPizzas">
      <li v-for="pizza in pizzas" :key="pizza.sys.id">
        <menu-item :item="pizza.fields"></menu-item>
      </li>
    </ul>
  </div>
</template>

<script>
  import MenuItem from '../components/MenuItem.vue';
  import { mapActions } from 'vuex';

  export default {
    name: 'menu',
    components: {
      MenuItem
    },
    data() {
      return {
        loading: true,
        hasPizzas: false,
        page: {
          fields: {},
          sys: {}
        },
        pizzas: {
          fields: {},
          sys: {}
        }
      }
    },
    methods: {
      ...mapActions({
        getPage: 'getPage',
        getPizzas: 'getPizzas'
      })
    },
    async created() {
      await this.getPizzas();
      await this.getPage('3KvFsAMjmMsmgIG2I6oGGU');
      this.page = this.$store.state.page;
      this.pizzas = this.$store.state.pizzas.items;
      this.loading = false;
      this.hasPizzas = true;
    }
  }
</script>