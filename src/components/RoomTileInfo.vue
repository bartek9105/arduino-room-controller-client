<template>
  <div>
    <div class="flex">
      <div class="bg-white px-8 py-4 shadow-sm flex items-center text-right">
        <div class="text-blue-500 mr-8 text-2xl">
          <slot></slot>
        </div>
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
