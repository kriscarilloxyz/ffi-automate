<template>
  <div id="fieldsFilmAwards">

    <div class="award-item"
         v-for="(award, index) in awards"
         :key="index">
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn right
                 text
                 color="red"
                 x-small
                 v-bind="attrs"
                 v-on="on"
                 @click="awards.splice(index, 1)">
            Remove award
          </v-btn>
        </template>
        <span>Remove award</span>
      </v-tooltip>

      <fields-award :award="award"></fields-award>

      <v-divider class="primary lighten-4 pt-1 mb-5"></v-divider>

    </div>

    <v-btn small
           color="primary"
           style="float: right"
           @click="awards.push({})">Add award</v-btn>
  </div>
</template>

<script>
import fieldsAward from '@/components/fieldsAward'

export default {
  name: 'fieldsFilmAwards',
  props: ['form'],

  components: {
    fieldsAward
  },

  data: () => ({
    awards: []
  }),

  watch: {
    awards (v) {
      this.form.awards = v
    }
  }
}
</script>