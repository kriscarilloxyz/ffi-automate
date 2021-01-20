<template>
  <v-app-bar app>
    <v-toolbar-title class="grey--text mr-12">
      First Focus International
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-text-field solo
                  hide-details
                  label="Search"
                  prepend-inner-icon="mdi-magnify"></v-text-field>

    <v-switch class="ml-3"
              hide-details
              v-model="dark"
              small
              :label="dark ? 'dark' : 'light'"></v-switch>
    <v-divider inset
               vertical
               class="pa-5 ml-3 mr-3"> </v-divider>
    <v-tooltip bottom
               v-for="item in right"
               :key="item.to">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary"
               class="ml-3"
               :to="item.to"
               icon
               v-bind="attrs"
               v-on="on">
          <v-icon>
            {{item.icon}}
          </v-icon>
        </v-btn>
      </template>
      <span>{{item.tip}}</span>
    </v-tooltip>
  </v-app-bar>
</template>

<script>
export default {
  name: 'toolbarNav',
  data: () => ({
    dark: false,
    left: [],

    right: [
      {
        to: '/dashboard',
        icon: 'mdi-view-dashboard-variant',
        tip: 'Dashboard'
      },
      {
        to: '/profile',
        icon: 'mdi-account',
        tip: 'Account'
      }
    ]
  }),

  watch: {
    dark (v) {
      this.$vuetify.theme.dark = v
    }
  }
}
</script>