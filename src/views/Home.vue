<template>
  <div v-if="!loading" class="home-page">
    <h2>{{ page.fields.title }}</h2>
    <p>{{ page.fields.content }}</p>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'home',
    data() {
      return {
        loading: true,
        page: {
          fields: {},
          sys: {},
        }
      }
    },
    methods: {
      ...mapActions({
        getPage: 'getPage',
      })
    },
    async created() {
      await this.getPage('5oNN2jSB4QWS2wkQCwqAM0');
      this.page = this.$store.state.page;
      this.loading = false;
    }
  }
</script>
