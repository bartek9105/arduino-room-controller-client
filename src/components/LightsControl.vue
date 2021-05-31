<template>
  <div>
    <div class="flex items-center mb-4">
      <h2 class="text-lg font-bold text-gray-500 mr-16">Lights control</h2>
      <div class="flex items-center">
        <span class="text-gray-500 mr-2">Lights on</span>
        <ToggleSwitch />
      </div>
    </div>
    <ColorSwatch />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ToggleSwitch from '@/components/ToggleSwitch.vue'
import ColorSwatch from '@/components/ColorSwatch.vue'

export default defineComponent({
  name: 'LightsControl',
  components: {
    ToggleSwitch,
    ColorSwatch
  }
})
</script>

<style></style>
