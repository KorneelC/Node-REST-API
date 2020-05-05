<template>
<div class="playlist">
   <h2>{{title}}</h2>
    <div>
      <form :id="id">
        <input v-model="valuePlaylist" @input="postPlaylist" type="text" required />
        <p>You will submit a list with following name: <span>{{valuePlaylist}}</span></p>
      </form>
      <button @click="STORE_POSTED_PLAYLISTS" :form="id" value="Submit" type="submit">Submit</button>
    </div>
</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
    props:['title', 'id', 'valuePlaylist', 'inputMethod', 'getPlaylistName','clickMethod'],
    methods: {
        ...mapMutations(['STORE_POSTED_PLAYLISTS']),
        postPlaylist(e) {
            this.$store.commit("STORE_POST_PLAYLIST", e.target.value);
        }
    },
    computed:{
        ...mapGetters(['getPostPlaylist'])
    },
    data () {
        return {
        }
    }
}
</script>

<style>
h2 {
  text-align: center;
  width: 100%;
}
.playlist {
    width: 100%;
    padding: 0.5rem;
}
input, span {
  text-transform: capitalize;
}
</style>