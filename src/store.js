import Vue from 'vue';
import Vuex from 'vuex';
import {createClient} from 'contentful';

const client = createClient({
    space: 'n7az14uegfuq',
    accessToken: 'e2519409affba32fa4a06c63bac3f5df9c60cc8b174ee01e50a59f656e512b73'
});
// Content preview access: 2685c076cbca360be599127f3998c943977bccfc7460f49e5754400d31202803

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    page: {},
    pizzas: [],
    cart: [],
  },
  mutations: {
    setPage(s, data) {
      s.page = data;
    },

    setPizzas(s, data) {
      s.pizzas = data;
    },

    setInCart(s, data) {
      s.cart.push(data);
    }
  },
  actions: {
    async getPage({ commit }, pageId) {
      await client.getEntry(pageId)
        .then(function (entry) {
          commit('setPage', entry);
        });
    },

    async getPizzas({ commit }) {
      await client.getEntries({
        'content_type': 'pizza'
      })
        .then((response) => commit('setPizzas', response))
        .catch(console.error);
    },

    addToCart ({ commit }, pizza) {
      commit('setInCart', pizza);
    }
  }
});
