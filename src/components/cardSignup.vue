<template>
  <v-card id="cardSignup"
          max-width="500">
    <v-card-text>

      <v-form v-model="valid">
        <fields-signup :form="form" />
      </v-form>

    </v-card-text>
    <v-divider class="mt-12"></v-divider>
    <v-card-actions>
      <v-btn color="primary"
             @click="signup"
             :loading="loading"
             :disabled="!valid">
        Sign up
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn color="primary"
             text
             to="/sign-in">
        Already have an account?
      </v-btn>
    </v-card-actions>

  </v-card>
</template>

<script>  
import firebase from 'firebase'
import fieldsSignup from '@/components/fieldsSignup'

export default {
  name: 'cardSignup',

  components: {
    fieldsSignup
  },

  data: () => ({
    valid: true,
    loading: false,
    form: {}
  }),

  methods: {
    async saveUser (uid) {
      const fields = {}

      Object.keys(this.form)
        .filter(key => key !== 'password')
        .forEach(key => fields[key] = this.form[key])

      await this.$db.overwrite(`users/${uid}`, fields)
      console.log(fields)
    },


    async signup () {
      this.loading = true

      const uid = await firebase.auth().createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then((auth) => auth.user.uid)
        .catch(err => this.snack('error', err.message))

      if (uid) await this.saveUser(uid)

      this.loading = false
    }
  }
}
</script>