<template>
  <div>
    <input id="newPlaylist" type="text">
    <button @click="postNewPlaylist" type="submit">submit</button>
    <ul>
      <li v-for="playlist in getPlaylists" :key ="playlist.name">{{playlist.Name}}</li>
    </ul>
    <p>{{getPlaylists}}</p>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
export default {
  data () {
    return {
    }
  },
  methods: {
    ...mapMutations(['postNewPlaylist'])
  },
  computed:{
    ...mapGetters(['getPlaylists'])
  }
}
</script>


<style scoped>

</style>
