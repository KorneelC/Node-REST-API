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
  postNewPlaylist() {
    const playlist = document.getElementById('newPlaylist')
    console.log(playlist);
    axios.post(baseUrl + 'knex',
      { playlistName: playlist.value}
    )

  }
}


//actions
const actions = {
  fetchPlaylists({ commit }) {
    axios.get(baseUrl + 'knex')
      .then(({ data }) => {
        commit(types.STORE_FETCHED_PLAYLISTS, data);
      })
  },

  // postNewPlaylist({ commit }) {
  //   axios.post(baseUrl + 'knex',
  //     { playlistName: 'dubstep' }
  //   )
  //     .then((response) => {
  //       commit(types.STORE_POSTED_PLAYLISTS, response)
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

}


export default {
  state,
  getters,
  actions,
  mutations,
};

