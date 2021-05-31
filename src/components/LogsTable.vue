<template>
  <h2 class="text-lg font-bold text-gray-500 mb-8 mr-16">{{ title }}</h2>
  <table class="shadow-md rounded-md w-full text-gray-700">
    <tr class="text-left text-gray-700 bg-white">
      <th class="px-4 py-4">Name</th>
      <th class="px-4 py-4">Date</th>
      <th class="px-4 py-4">Time</th>
    </tr>
    <tr class="bg-white border-b-2 border-gray-200 border-solid">
      <td class="px-4 py-4">Window opened</td>
      <td class="px-4 py-4">08-12-2020</td>
      <td class="px-4 py-4">11:37</td>
    </tr>
    <tr class="bg-white">
      <td class="px-4 py-4">Window opened</td>
      <td class="px-4 py-4">08-12-2020</td>
      <td class="px-4 py-4">11:37</td>
    </tr>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LogsTable',
  props: {
    title: {
      type: String
    }
  }
})
</script>
