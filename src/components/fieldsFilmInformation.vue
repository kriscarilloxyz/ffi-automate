<template>
  <div id="fieldsFilmInformation">
    <v-text-field label="Film name"
                  v-model="form.name"
                  type="text"
                  :rules="$rule.required" />

    <v-text-field label="Year Released"
                  v-model="form.year"
                  type="number"
                  :rules="$rule.required" />

    <v-text-field label="Running time"
                  persistent-hint
                  v-model="form.runningTime"
                  type="number"
                  :rules="$rule.required" />

    <v-autocomplete ref="country"
                    v-model="form.productionCountry"
                    :rules="$rule.required"
                    :items="countries"
                    label="Production Country"
                    placeholder="Select..." />

    <v-combobox multiple
                label="Genre"
                placeholder="Hit enter to add an item"
                v-model="form.genres"
                :rules="$rule.required"
                chips></v-combobox>

    <v-textarea label="Description"
                v-model="form.descripton"
                :rules="$rule.required"></v-textarea>
  </div>
</template>

<script>
export default {
  name: 'fieldsFilmInformation',
  props: ['form']
}
</script>