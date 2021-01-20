<template>
  <v-container fill-height
               id="Signin">
    <v-row justify-center>
      <v-col cols="12">
        <card-signin class="mx-auto"></card-signin>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import cardSignin from '../components/cardSignin.vue'

export default {
  name: 'Signin',

  components: { cardSignin }
}
</script>