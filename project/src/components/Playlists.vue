<template>
  <div class="list-wrapper">
    <h2>Add new playlist</h2>
    <div class="post-playlist">
      <form id="post-list">
        <input :value="getPostPlaylist" @input="postPlaylist" type="text" required />
        <p>You will submit a list with following name: {{getPostPlaylist}}</p>
      </form>
      <button @click="STORE_POSTED_PLAYLISTS" form="post-list" value="Submit" type="submit">Submit</button>
    </div>
    <div class="update-playlist">
      <h2>Updating playlist</h2>
      <form id="update-list">
        <input required :value="getSearchPlaylist" @input="searchPlaylist" type="text" />
        <p>You will update a list with following name: {{getSearchPlaylist}}</p>
        <input :value="getUpdatedPlaylist" @input="updatePlaylist" required type="text" />
        <p>the new name of the playlist : {{getUpdatedPlaylist}}</p>
      </form>
      <button @click="STORE_UPDATED_PLAYLISTS" form="update-list" type="submit">Update</button>
    </div>
    <ul>
      <li v-for="playlist in getPlaylists" :key="playlist.PlaylistId">{{playlist.Name}}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["STORE_POSTED_PLAYLISTS", "STORE_UPDATED_PLAYLISTS"]),
    postPlaylist(e) {
      this.$store.commit("postedPlaylist", e.target.value);
    },
    updatePlaylist(e) {
      this.$store.commit("updatedPlaylist", e.target.value);
    },
    searchPlaylist(e) {
      this.$store.commit("searchPlaylist", e.target.value);
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
h2 {
  text-align: center;
  width: 100%;
}
.list-wrapper > div {
  width: 100%;
  padding: 0.5rem;
}
input {
  text-transform: capitalize;
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
