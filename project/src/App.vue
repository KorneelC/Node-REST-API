<template>
  <div>
    <playlists />
  </div>
</template>

<script>
import Playlists from './components/Playlists.vue'


export default {
  components: {
    Playlists
  },
  mounted() {
    this.$store.dispatch('fetchPlaylists')
  }
}
</script>

<style>

</style>
