<template>
  <v-card id="cardSignin"
          max-width="500">

    <v-card-text>

      <v-form id="formSignin"
              v-model="valid">
        <fields-signin :form="form" />

      </v-form>
    </v-card-text>
    <v-divider class="mt-12"></v-divider>
    <v-card-actions>
      <v-btn @click="signIn"
             color="primary"
             :disabled="!valid"
             :loading="loading">
        Sign In
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn color="primary"
             text
             to="/sign-up">
        Don't have an account?
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import fieldsSignin from '@/components/fieldsSignin'
import firebase from 'firebase'
export default {
  name: 'cardSignin',
  components: { fieldsSignin },

  data: () => ({
    loading: false,
    valid: true,
    form: {}
  }),

  methods: {
    async signIn () {
      this.loading = true

      await firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password)
        .catch(err => this.snack('error', err.message))

      this.loading = false
    }
  }
}
</script>