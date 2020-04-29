import axios from "axios";
import * as types from '../mutation-types';

const baseUrl = "http://localhost:8000/";

//state
const state = {
  playlists: [],
};

// getters 
const getters = {
  getPlaylists: state => {
    return state.playlists
  }
};

//mutations
const mutations = {
  [types.STORE_FETCHED_PLAYLISTS](state, payload) {
    state.playlists = payload
  },
  [types.STORE_POSTED_PLAYLISTS]() {
    const playlist = document.getElementById('newPlaylist')
    axios.post(baseUrl + 'knex',
      { playlistName: playlist.value}
    )

  }
}


//actions
const actions = {
  async fetchPlaylists({ commit }) {
    try {
    const resp = await axios.get(baseUrl + 'knex')
      commit(types.STORE_FETCHED_PLAYLISTS, resp.data);
    }
    catch(error){
      console.log(error);
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
};

