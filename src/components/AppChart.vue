<template>
  <div>
    <h2 class="text-lg font-bold text-gray-500 mb-4">{{ title }}</h2>
    <apexchart
      type="area"
      :options="chartOptions"
      :series="series"
      height="300"
    ></apexchart>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

export default defineComponent({
  components: {
    apexchart: VueApexCharts
  },
  props: {
    title: {
      type: String
    }
  },
  data: function() {
    return {
      chartOptions: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [
            '06:00',
            '07:00',
            '08:00',
            '09:00',
            '10:00',
            '11:00',
            '12:00',
            '13:00'
          ]
        }
      },
      series: [
        {
          name: 'Temperature',
          data: [23, 22, 21, 22, 25, 24, 21, 18]
        }
      ]
    }
  }
})
</script>

<style></style>
