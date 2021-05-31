<template>
  <button
    class="bg-blue-400 px-4 py-2 text-white shadow-sm rounded-md hover:bg-blue-500 transition-all ease-in-out"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppButton',
  props: {
    text: {
      type: String
    }
  }
})
</script>

<style></style>
