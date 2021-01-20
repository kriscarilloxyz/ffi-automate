<template>
  <div id="fieldsSignin">
    <v-text-field label="Email"
                  v-model="form.email"
                  :rules="$rule.email"
                  type="email" />

    <v-text-field label="Password"
                  v-model="form.password"
                  :rules="$rule.password"
                  type="password" />
  </div>
</template>

<script>
export default {
  name: 'fieldsSignin',
  props: ['form']
}
</script>