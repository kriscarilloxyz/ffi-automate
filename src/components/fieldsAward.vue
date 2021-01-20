<template>
  <div class="fieldsAward">
    <v-text-field label="Name"
                  v-model="award.name"
                  :rules="$rule.required"></v-text-field>

    <v-file-input prepend-icon=""
                  label="Image / Poster"
                  v-model="award.file"></v-file-input>
  </div>
</template>

<script>
export default {
  name: 'fieldsAward',
  props: ['award']
}
</script>