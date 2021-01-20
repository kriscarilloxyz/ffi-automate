<template>
  <v-card id="cardSalesChart"
          max-height="500">
    <v-card-title>Sales & Expenses</v-card-title>
    <v-card-text>
      <chart-line :chart-data="datacollection"></chart-line>
    </v-card-text>
  </v-card>
</template>

<script>
import chartLine from '@/components/chartLine'

export default {
  name: 'cardSalesChart',

  components: {
    chartLine
  },

  data: () => ({
    datacollection: {}
  }),

  mounted () {
    this.fillData()
  },

  methods: {
    fillData () {
      this.datacollection = {
        labels: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: 'Profit',
            fill: false,
            borderColor: '#4CAF50',
            backgroundColor: '#4CAF50',

            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }, {
            label: 'Expenses',
            borderColor: '#F44336',
            backgroundColor: '#F44336',
            fill: false,
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
    },

    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  }
}
</script>