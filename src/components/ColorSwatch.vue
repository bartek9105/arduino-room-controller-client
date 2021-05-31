<template>
  <div class="flex">
    <div v-for="(color, index) in colors" :key="index">
      <div
        :style="{ backgroundColor: color }"
        class="mr-2 w-16 h-8 rounded-md cursor-pointer"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ColorSwatch',
  setup() {
    const colors = ref<string[]>([
      '#EF4444',
      '#F59E0B',
      '#10B981',
      '#3B82F6',
      '#8B5CF6',
      '#EC4899'
    ])
    return { colors }
  }
})
</script>

<style></style>
