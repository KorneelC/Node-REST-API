<template>
  <div class="list-wrapper">
    <h1>Add new playlist</h1>
    <div>
      <input required id="newPlaylist" type="text" />
      <button @click="STORE_POSTED_PLAYLISTS" type="submit">submit</button>
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
    ...mapMutations(["STORE_POSTED_PLAYLISTS"])
  },
  computed: {
    ...mapGetters(["getPlaylists"])
  }
};
</script>


<style scoped>
.list-wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
}
h1 {
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
