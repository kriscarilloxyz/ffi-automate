<template>
  <v-app>
    <app-nav></app-nav>

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12">
          </v-col>
        </v-row>
      </v-container>
      <slot />
    </v-main>

    <v-footer app
              class="mt-12 transparent"
              padless>
      <v-card flat
              color="transparent"
              tile
              class="text-center mx-auto">
        <v-card-text>
          <v-btn v-for="icon in [
                  'mdi-facebook',
                  'mdi-twitter',
                  'mdi-linkedin',
                  'mdi-instagram',
                ]"
                 :key="icon"
                 class="mx-4 "
                 icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import appNav from '@/components/appNav'

export default {
  name: 'defaultLayout',
  components: { appNav }
}
</script>