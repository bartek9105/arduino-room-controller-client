<template>
  <div>
    <RoomTilesInfo class="mb-16" />
    <LightsControl class="mb-16" />
    <AppChart title="Temperature" class="mb-8" />
    <AppChart title="Humidity" />
    <LogsTable title="Logs" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RoomTilesInfo from '@/components/RoomTilesInfo.vue'
import LightsControl from '@/components/LightsControl.vue'
import AppChart from '@/components/AppChart.vue'
import LogsTable from '@/components/LogsTable.vue'

export default defineComponent({
  name: 'Room',
  components: {
    RoomTilesInfo,
    LightsControl,
    AppChart,
    LogsTable
  }
})
</script>

<style></style>
