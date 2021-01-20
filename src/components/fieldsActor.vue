<template>
  <div class="fieldsActor">
    <v-text-field label="Name"
                  v-model="actor.name"
                  :rules="$rule.required"></v-text-field>

    <v-text-field label="Role"
                  v-model="actor.name"
                  :rules="$rule.required"></v-text-field>

    <v-file-input prepend-icon=""
                  label="Image"
                  v-model="actor.file"></v-file-input>
  </div>
</template>

<script>
export default {
  name: 'fieldsActor',
  props: ['actor']
}
</script>