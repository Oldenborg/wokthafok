import Vue from 'vue';
import Vuex from 'vuex';
// import {createClient} from 'contentful';
//
// const client = createClient({
//     space: 'developer_bookshelf',
//     accessToken: '0b7f6x59a0'
// });

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dick: false,
  },
  mutations: {

  },
  actions: {
    showDick(s) {
      s.dick = true;
    }
  }
});
