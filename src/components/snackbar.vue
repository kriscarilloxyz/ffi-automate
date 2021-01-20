<template>
  <v-snackbar id="snackbar"
              v-model="snackbar.state"
              :color="snackbar.color"
              top
              right>
    {{snackbar.message}}
  </v-snackbar>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Snackbar',

  computed: {
    ...mapState([
      'snackbar'
    ]),


    state: {
      get () { return this.snackbar.state },
      set (v) { this.$store.commit('set_snackbar', { state: v }) }
    }
  }
}
</script>