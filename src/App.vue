<template>
  <div id="FirstFocusInternational">
    <display-loading v-if="loading"></display-loading>
    <component :is="layout"
               v-else>
      <snackbar />
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import firebase from 'firebase'
import displayLoading from '@/components/displayLoading'
import snackbar from '@/components/snackbar'


export default {
  name: 'App',

  components: {
    snackbar,
    displayLoading
  },

  computed: {
    layout () {
      return this.$route.meta.layout ? this.$route.meta.layout + 'Layout' : 'defaultLayout'
    },

    ...mapState([
      'loading'
    ])
  },

  mounted () {
    firebase.auth().onAuthStateChanged(async auth => {
      this.$store.commit('set_loading', true)
      if (auth) {
        const user = await this.$db.read(`users/${auth.uid}`)

        if (user) {
          if (this.$route.path === '/sign-in' || this.$route.path === '/sign-up') this.$router.push('/dashboard')
          this.snack('success', `Welcome ${user.name}`)
        }

      } else {
        // redirect user to /sign-in
        if (this.$route.meta.auth) this.$router.push('/sign-in')
        this.$store.commit('set_user', false)
      }
      this.$store.commit('set_loading', false)
    })
  }
}
</script>