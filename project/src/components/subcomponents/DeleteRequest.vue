<template>
    <div class="playlist">
      <h2>Delete playlist</h2>
      <form id="delete-list">
        <input :value="getDeletedPlaylist" @input="deletePlaylist" required type="text" />
        <p>you will delete the playlist(s) : <span>{{getDeletedPlaylist}}</span></p>
      </form>
      <button @click="STORE_DELETED_PLAYLIST" form="delete-list"  value="submit" type="submit">Delete</button>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
    methods: {
        ...mapMutations(['STORE_DELETED_PLAYLIST']),
    deletePlaylist(e) {
      this.$store.commit("STORE_DELETE_PLAYLIST", e.target.value);
        }
    },
    computed: {
        ...mapGetters(['getDeletedPlaylist'])
    }
}
</script>

<style>
.playlist {
    width: 100%;
    padding: 0.5rem;
}
</style>