<template>
  <v-container>

    <v-row>
      <v-col cols="12">
        <card-sales-chart />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12"
             md="4">
        <card-earnings />
      </v-col>
      <v-col cols="12"
             md="4">
        <card-sales />
      </v-col>
      <v-col cols="12"
             md="4">
        <card-expenses />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12"
             md="4">
        <card-add-film></card-add-film>
      </v-col>
      <v-col cols="12"
             md="8">
        <slide-films></slide-films>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import cardSales from '@/components/cardSales'
import slideFilms from '@/components/slideFilms'
import cardAddFilm from '@/components/cardAddFilm'
import cardExpenses from '@/components/cardExpenses'
import cardEarnings from '@/components/cardEarnings'
import cardSalesChart from '@/components/cardSalesChart'

export default {
  name: 'Dashboard',

  components: {
    cardSalesChart,
    cardEarnings,
    cardSales,
    cardExpenses,
    slideFilms,
    cardAddFilm
  }
}
</script>