<template>
  <div id="fieldsSignup">
    <v-text-field label="Email"
                  v-model="form.email"
                  :rules="$rule.email"
                  type="email"></v-text-field>

    <v-text-field label="Password"
                  v-model="form.password"
                  :rules="$rule.password"
                  type="password"></v-text-field>

    <v-text-field label="Full name"
                  v-model="form.name"
                  :rules="$rule.required"
                  type="text">
    </v-text-field>

    <v-text-field label="Phone Number"
                  v-model="form.phone"
                  :rules="$rule.required"
                  type="text">
    </v-text-field>

    <v-text-field label="Address Line"
                  v-model="form.address"
                  :rules="$rule.required"
                  type="text">
    </v-text-field>

    <v-text-field label="City"
                  v-model="form.city"
                  :rules="$rule.required"
                  type="text">
    </v-text-field>

    <v-text-field label="State / Province / Region"
                  v-model="form.state"
                  :rules="$rule.required"
                  type="text">
    </v-text-field>

    <v-text-field label="Zip / Postal Code"
                  v-model="form.zip"
                  :rules="$rule.required"
                  type="text">
    </v-text-field>

    <v-autocomplete ref="country"
                    v-model="form.country"
                    :rules="$rule.required"
                    :items="countries"
                    label="Country"
                    placeholder="Select..."
                    required></v-autocomplete>

    <v-text-field label="Company"
                  v-model="form.company"
                  :rules="$rule.required"
                  type="text">
    </v-text-field>

  </div>
</template>

<script>
export default {
  name: 'fieldsSignup',
  props: ['form']
}
</script>