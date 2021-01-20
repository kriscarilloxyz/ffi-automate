<template>
  <div class="fieldsFestival">
    <v-text-field label="Name"
                  v-model="festival.name"
                  :rules="$rule.required"></v-text-field>

    <v-file-input prepend-icon=""
                  label="Image / Poster"
                  v-model="festival.file"></v-file-input>
  </div>
</template>

<script>
export default {
  name: 'fieldsFestival',
  props: ['festival']
}
</script>