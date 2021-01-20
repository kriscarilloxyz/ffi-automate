<template>
  <div class="fieldsProducer">
    <v-text-field label="Name"
                  v-model="producer.name"
                  :rules="$rule.required"></v-text-field>

    <v-text-field label="Role"
                  v-model="producer.name"
                  :rules="$rule.required"></v-text-field>

    <v-file-input prepend-icon=""
                  label="Image"
                  v-model="producer.file"></v-file-input>

  </div>
</template>

<script>
export default {
  name: 'fieldsProducer',
  props: ['producer']
}
</script>