import Vue from 'vue'
import Vuex from 'vuex'
import playlists from './modules/playlists';


Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    playlists
  },
})
