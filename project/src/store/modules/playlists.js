import axios from "axios";
import * as types from '../mutation-types';

const baseUrl = "http://localhost:8000/knex";

//state
const state = {
  playlists: [],
  postPlaylist: null,
  updatePlaylist: null,
  deletedPlaylist: null,
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
  },
  getDeletedPlaylist: state => {
    return state.deletedPlaylist
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
  [types.STORE_POST_PLAYLIST] (state, payload) {
    state.postPlaylist = payload
  },
  [types.STORE_UPDATED_PLAYLISTS](state) {
    axios.put(baseUrl,
      { updatePlaylistName: state.updatePlaylist,
      searchPlaylistName: state.searchPlaylist}
    )
  },
  [types.STORE_SEARCH_PLAYLIST] (state,payload) {
    state.searchPlaylist = payload
  },
  [types.STORE_UPDATE_PLAYLIST] (state, payload) {
    state.updatePlaylist = payload
  },
  [types.STORE_DELETED_PLAYLIST] (state) {
    axios.delete(baseUrl, { data: {
      deletePlaylist: state.deletedPlaylist
    }
    }
      )
  },
  [types.STORE_DELETE_PLAYLIST] (state, payload) {
    state.deletedPlaylist = payload
  }
}


//actions
const actions = {
  async fetchPlaylists({ commit }) {
    try {
    const {data} = await axios.get(baseUrl)
      commit(types.STORE_FETCHED_PLAYLISTS, data);
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

