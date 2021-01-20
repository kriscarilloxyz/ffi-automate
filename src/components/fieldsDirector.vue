<template>
  <div class="fieldsDirector">
    <v-text-field label="Name"
                  v-model="director.name"
                  :rules="$rule.required"></v-text-field>

    <v-text-field label="Role"
                  v-model="director.name"
                  :rules="$rule.required"></v-text-field>

    <v-file-input prepend-icon=""
                  label="Image"
                  v-model="director.file"></v-file-input>
  </div>
</template>

<script>
export default {
  name: 'fieldsDirector',
  props: ['director']
}
</script>