<template>
  <div id="fieldsFilmProducers">

    <div class="producer-item"
         v-for="(producer, index) in producers"
         :key="index">
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn right
                 text
                 color="red"
                 x-small
                 v-bind="attrs"
                 v-on="on"
                 @click="producers.splice(index, 1)">
            Remove producer
          </v-btn>
        </template>
        <span>Remove producer</span>
      </v-tooltip>

      <fields-producer :producer="producer"></fields-producer>

      <v-divider class="primary lighten-4 pt-1 mb-5"></v-divider>

    </div>

    <v-btn small
           style="float: right"
           color="primary"
           @click="producers.push({})">Add producer</v-btn>
  </div>
</template>

<script>
import fieldsProducer from '@/components/fieldsProducer'

export default {
  name: 'fieldsFilmProducers',
  props: ['form'],
  components: { fieldsProducer },

  data: () => ({
    producers: []
  }),

  watch: {
    producers (v) {
      this.form.producers = v
    }
  }
}
</script>