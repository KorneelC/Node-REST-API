<template>
  <div class="list-wrapper">
    <post-request :id="postPlaylistInfo.id" :title="postPlaylistInfo.title" :valuePlaylist="postPlaylistInfo.valuePlaylist" />
    <div class="playlist">
      <h2>Updating playlist</h2>
      <form id="update-list">
        <input required :value="getSearchPlaylist" @input="searchPlaylist" type="text" />
        <p>You will update a playlist with following name: <span>{{getSearchPlaylist}}</span></p>
        <input :value="getUpdatedPlaylist" @input="updatePlaylist" required type="text" />
        <p>the new name of the playlist : <span>{{getUpdatedPlaylist}}</span></p>
      </form>
      <button @click="STORE_UPDATED_PLAYLISTS" form="update-list" type="submit">Update</button>
    </div>
    <deleted-playlist></deleted-playlist>
    <ul>
      <li v-for="playlist in getPlaylists" :key="playlist.PlaylistId">{{playlist.PlaylistId}}. {{playlist.Name}}</li>
    </ul>
  </div>

</template>

<script>
import postRequest from './subcomponents/PostRequest.vue';
import deletedPlaylist from './subcomponents/DeleteRequest.vue'
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      postPlaylistInfo: {
        title:'Add new playlist',
        id:'post-list',
        valuePlaylist: '',
        inputMethod:'postPlaylist',
        clickMethod: 'STORE_POST_PLAYLIST'
      },
      updatePlaylistInfo: {

      }
    };
  },
  components:{
    postRequest,
    deletedPlaylist
  },
  methods: {
    ...mapMutations(["STORE_POSTED_PLAYLISTS", "STORE_UPDATED_PLAYLISTS"]),
    postPlaylist(e) {
      this.$store.commit("STORE_POST_PLAYLIST", e.target.value);
    },
    updatePlaylist(e) {
      this.$store.commit("STORE_UPDATE_PLAYLIST", e.target.value);
    },
    searchPlaylist(e) {
      this.$store.commit("STORE_SEARCH_PLAYLIST", e.target.value);
    }
  },
  computed: {
    ...mapGetters([
      "getPlaylists",
      "getPostPlaylist",
      "getUpdatedPlaylist",
      "getSearchPlaylist"
    ])
  }
};
</script>


<style scoped>
.list-wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
}
.playlist {
    width: 100%;
    padding: 0.5rem;
}
ul {
  padding: 0.3rem 0.3rem;
}
li {
  display: inline-block;
  width: 19.8%;
}
li:nth-child(odd) {
  background-color: rgb(199, 188, 188);
}
li:nth-child(even) {
  background-color: rgb(240, 226, 226);
}
</style>
