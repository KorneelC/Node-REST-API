import axios from "axios";
import * as types from '../mutation-types';

const baseUrl = "http://localhost:8000/knex";

//state
const state = {
  playlists: [],
  postPlaylist: null,
  updatePlaylist: null,
  searchPlaylist: null,
};

// getters 
const getters = {
  getPlaylists: state => {
    return state.playlists
  },
  getPostPlaylist: state => {
    return state.postPlaylist
  },
  getSearchPlaylist: state => {
    return state.searchPlaylist
  },
  getUpdatedPlaylist: state => {
    return state.updatePlaylist
  }
};

//mutations
const mutations = {
  [types.STORE_FETCHED_PLAYLISTS](state, payload) {
    state.playlists = payload
  },
  [types.STORE_POSTED_PLAYLISTS](state) {
    axios.post(baseUrl,
      { playlistName: state.postPlaylist}
    )
  },
  postedPlaylist (state, payload) {
    state.postPlaylist = payload
  },
  [types.STORE_UPDATED_PLAYLISTS](state) {
    axios.put(baseUrl,
      { updatePlaylistName: state.updatePlaylist,
      searchPlaylistName: state.searchPlaylist}
    )
  },
  searchPlaylist (state,payload) {
    state.searchPlaylist = payload
  },
  updatedPlaylist (state, payload) {
    state.updatePlaylist = payload
  },
}


//actions
const actions = {
  async fetchPlaylists({ commit }) {
    try {
    const resp = await axios.get(baseUrl)
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

