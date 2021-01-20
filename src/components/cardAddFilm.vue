<template>
  <v-card id="cardAddFilm">
    <v-form v-model="valid">

      <v-tabs show-arrows>
        <v-tab>Film</v-tab>
        <v-tab-item>
          <v-card-text>
            <v-alert border="bottom"
                     type="info"
                     class="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </v-alert>
            <fields-film-information :form="form"></fields-film-information>
          </v-card-text>
        </v-tab-item>

        <v-tab>Awards</v-tab>
        <v-tab-item>
          <v-card-text>
            <v-alert border="bottom"
                     type="info"
                     class="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </v-alert>
            <fields-film-awards :form="form"></fields-film-awards>
          </v-card-text>
        </v-tab-item>

        <v-tab>Festivals</v-tab>
        <v-tab-item>
          <v-card-text>
            <v-alert border="bottom"
                     type="info"
                     class="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </v-alert>
            <fields-film-festivals :form="form"></fields-film-festivals>
          </v-card-text>
        </v-tab-item>

        <v-tab>Actors</v-tab>
        <v-tab-item>
          <v-card-text>
            <v-alert border="bottom"
                     type="info"
                     class="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </v-alert>
            <fields-film-actors :form="form"></fields-film-actors>
          </v-card-text>
        </v-tab-item>

        <v-tab>Directors</v-tab>

        <v-tab-item>
          <v-card-text>
            <v-alert border="bottom"
                     type="info"
                     class="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </v-alert>
            <fields-film-directors :form="form"></fields-film-directors>
          </v-card-text>
        </v-tab-item>

        <v-tab>Producers</v-tab>
        <v-tab-item>
          <v-card-text>
            <v-alert border="bottom"
                     type="info"
                     class="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </v-alert>
            <fields-film-producers :form="form"></fields-film-producers>
          </v-card-text>
        </v-tab-item>
      </v-tabs>

      <v-divider class="mt-12"></v-divider>
      <v-card-actions>
        <v-btn :disabled="!valid"
               color="primary"
               text
               @click="submit">
          Submit
        </v-btn>
      </v-card-actions>
    </v-form>

  </v-card>
</template>

<script>
import fieldsFilmAwards from '@/components/fieldsFilmAwards'
import fieldsFilmActors from '@/components/fieldsFilmActors'
import fieldsFilmFestivals from '@/components/fieldsFilmFestivals'
import fieldsFilmInformation from '@/components/fieldsFilmInformation'
import fieldsFilmDirectors from '@/components/fieldsFilmDirectors'
import fieldsFilmProducers from '@/components/fieldsFilmProducers'

export default {
  name: 'cardAddFilm',

  components: {
    fieldsFilmActors,
    fieldsFilmAwards,
    fieldsFilmFestivals,
    fieldsFilmInformation,
    fieldsFilmDirectors,
    fieldsFilmProducers
  },

  data: () => ({
    valid: true,
    form: {}
  }),

  async mounted () {
    const films = await this.$db.readMany('films')
    this.form = films[0]
  },

  methods: {
    submit () {
      this.$db.overwrite(`films/${this.form.key}`, this.form)
    }
  }
}
</script>