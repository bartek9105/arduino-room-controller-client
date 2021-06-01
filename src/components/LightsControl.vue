<template>
  <div>
    <div class="flex items-center mb-4 justify-between">
      <h2 class="text-lg font-bold text-gray-500 mr-16">Lights control</h2>
      <div class="flex items-center">
        <ToggleSwitch @toggle="emitedToggleStatus" />
      </div>
    </div>
    <ColorSwatch @color="emitedColor" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'

import ToggleSwitch from '@/components/ToggleSwitch.vue'
import ColorSwatch from '@/components/ColorSwatch.vue'

export default defineComponent({
  name: 'LightsControl',
  components: {
    ToggleSwitch,
    ColorSwatch
  },
  setup() {
    const emitedColor = async (pickedColor: string) => {
      await changeLedColor(pickedColor)
    }

    const emitedToggleStatus = async (toggle: boolean) => {
      await axios.post('http://localhost:3000/led/status', {
        status: toggle
      })
    }

    const changeLedColor = async (color: string) => {
      await axios.post('http://localhost:3000/led', {
        color
      })
    }

    return { emitedColor, changeLedColor, emitedToggleStatus }
  }
})
</script>

<style></style>
