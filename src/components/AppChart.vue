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
    },
    data: {
      type: Array
    },
    dates: {
      type: Array
    }
  },
  data() {
    return {
      chartOptions: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: this.dates
        }
      },
      series: [
        {
          name: this.title,
          data: this.data
        }
      ]
    }
  }
})
</script>

<style></style>
