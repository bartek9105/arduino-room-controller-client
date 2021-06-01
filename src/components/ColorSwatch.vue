<template>
  <div class="flex">
    <div v-for="(color, index) in colors" :key="index">
      <div
        :style="{ backgroundColor: color }"
        class="mr-2 w-16 h-8 rounded-md cursor-pointer flex items-center justify-center"
        @click="pickColor(color)"
      >
        <font-awesome-icon
          :icon="['fas', 'check-circle']"
          class="text-white"
          v-if="color === pickedColor"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ColorSwatch',
  setup(_, { emit }) {
    const colors = ref<string[]>([
      '#EF4444',
      '#F59E0B',
      '#10B981',
      '#3B82F6',
      '#8B5CF6',
      '#EC4899'
    ])

    const pickedColor = ref<string>('')
    const pickColor = (color: string) => {
      pickedColor.value = color
      emit('color', pickedColor.value)
    }
    return { colors, pickedColor, pickColor }
  }
})
</script>

<style></style>
