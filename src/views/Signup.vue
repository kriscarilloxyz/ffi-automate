<template>
  <v-container id="Signup"
               fill-height>
    <v-row align-center>
      <v-col cols="12">
        <card-signup class="mx-auto" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import cardSignup from '@/components/cardSignup'

export default {
  name: 'Signup',
  components: { cardSignup }
}
</script>