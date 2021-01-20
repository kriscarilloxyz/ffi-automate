<template>
  <v-card>
    <v-slide-group class="pa-4"
                   active-class="success"
                   show-arrows>
      <v-slide-item v-for="n in 15"
                    :key="n">
        <v-card class="ma-4"
                hover>
          <v-row class="fill-height"
                 align="center"
                 justify="center">
            <v-img src="@/assets/avengers-endgame-poster-2.jpg"
                   width="300"></v-img>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-card>
</template>

<script>
export default {
  name: 'slideFilms',
}
</script>