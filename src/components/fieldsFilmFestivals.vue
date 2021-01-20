<template>
  <div id="fieldsFilmFestivals">

    <div class="award-item"
         v-for="(festival, index) in festivals"
         :key="index">
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn right
                 text
                 color="red"
                 x-small
                 v-bind="attrs"
                 v-on="on"
                 @click="festivals.splice(index, 1)">
            Remove festival
          </v-btn>
        </template>
        <span>Remove festival</span>
      </v-tooltip>

      <fields-festival :festival="festival"></fields-festival>

      <v-divider class="primary lighten-4 pt-1 mb-5"></v-divider>

    </div>

    <v-btn small
           style="float: right"
           color="primary"
           @click="festivals.push({})">Add festival</v-btn>
  </div>
</template>

<script>
import fieldsFestival from '@/components/fieldsFestival'
export default {
  name: 'fieldsFilmFestivals',
  props: ['form'],
  components: { fieldsFestival },

  data: () => ({
    festivals: []
  }),

  watch: {
    festivals (v) {
      this.form.festivals = v
    }
  }
}
</script>