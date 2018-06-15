<template>
  <div v-if="!loading" class="confirmation-page">
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
      await this.getPage('2OtV5DlFiU2Y2WqSq2AcQ8');
      this.page = this.$store.state.page;
      this.loading = false;
    }
  }
</script>
