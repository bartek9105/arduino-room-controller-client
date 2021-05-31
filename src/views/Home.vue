<template>
  <AppButton text="Change color" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios from 'axios'

import AppButton from '@/components/AppButton.vue'

export default defineComponent({
  name: 'Home',
  components: {
    AppButton
  },
  setup() {
    const color = ref<string>('')

    const changeColor = async () => {
      try {
        await axios.post('http://localhost:3000', {
          color: `#${color.value}`
        })
      } catch (error) {
        console.error(error)
      }
    }

    const turnOff = async () => {
      try {
        await axios.get('http://localhost:3000/turn-off')
      } catch (error) {
        console.error(error)
      }
    }

    const rainbow = async () => {
      try {
        await axios.get('http://localhost:3000/rainbow')
      } catch (error) {
        console.error(error)
      }
    }

    return { color, changeColor, turnOff, rainbow }
  }
})
</script>

<style lang="scss" scoped></style>
