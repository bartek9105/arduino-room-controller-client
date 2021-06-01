<template>
  <div>
    <div class="flex">
      <div
        class="bg-white px-8 py-4 shadow-sm mr-8 flex items-center text-right"
      >
        <svg
          class="w-10 h-10 mr-6 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          ></path>
        </svg>
        <div class="flex flex-col">
          <span class="text-gray-700 mb-2">{{ name }}</span>
          <span class="text-gray-500 text-sm">{{ data }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RoomTilesInfo',
  props: {
    data: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
})
</script>

<style></style>
