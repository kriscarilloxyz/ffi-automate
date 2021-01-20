<template>
  <div id="fieldsFilmActors">

    <div class="actor-item"
         v-for="(actor, index) in actors"
         :key="index">

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn right
                 text
                 color="red"
                 x-small
                 v-bind="attrs"
                 v-on="on"
                 @click="actors.splice(index, 1)">
            Remove actor
          </v-btn>
        </template>
        <span>Remove actor</span>
      </v-tooltip>

      <fields-actor :actor="actor"></fields-actor>
      <v-divider class="primary lighten-4 pt-1 mb-5"></v-divider>

    </div>

    <v-btn small
           style="float: right"
           color="primary"
           @click="actors.push({})">Add actor</v-btn>
  </div>
</template>

<script>
import fieldsActor from '@/components/fieldsActor'

export default {
  name: 'fieldsFilmActors',
  props: ['form'],
  components: { fieldsActor },

  data: () => ({
    actors: []
  }),

  watch: {
    actors (v) {
      this.form.actors = v
    }
  }
}
</script>