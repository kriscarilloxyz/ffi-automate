<template>
  <div id="fieldsFilmDirectors">

    <div class="director-item"
         v-for="(director, index) in directors"
         :key="index">
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn right
                 text
                 color="red"
                 x-small
                 v-bind="attrs"
                 v-on="on"
                 @click="directors.splice(index, 1)">
            Remove director
          </v-btn>
        </template>
        <span>Remove director</span>
      </v-tooltip>

      <fields-director :director="director"></fields-director>

      <v-divider class="primary lighten-4 pt-1 mb-5"></v-divider>

    </div>

    <v-btn small
           color="primary"
           style="float: right"
           @click="directors.push({})">Add director</v-btn>
  </div>
</template>

<script>
import fieldsDirector from '@/components/fieldsDirector'

export default {
  name: 'fieldsFilmDirectors',
  props: ['form'],
  components: { fieldsDirector },

  data: () => ({
    directors: []
  }),

  watch: {
    directors (v) {
      this.form.directors = v
    }
  }
}
</script>