<template>
  <div>
    <RoomTilesInfo />
    <LightsControl />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RoomTilesInfo from '@/components/RoomTilesInfo.vue'
import LightsControl from '@/components/LightsControl.vue'

export default defineComponent({
  name: 'Room',
  components: {
    RoomTilesInfo,
    LightsControl
  }
})
</script>

<style></style>
