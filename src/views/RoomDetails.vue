<template>
  <div>
    <h2 class="text-lg font-bold text-gray-500 mb-4">Room name</h2>
    <div class="flex justify-between">
      <RoomTileInfo class="mb-16" name="Temperature" :data="data.temperature">
        <font-awesome-icon icon="temperature-high" />
      </RoomTileInfo>
      <RoomTileInfo class="mb-16" name="Humidity" :data="data.humidity">
        <font-awesome-icon icon="tint" />
      </RoomTileInfo>
      <RoomTileInfo class="mb-16" name="Motion sensor" data="No one inside">
        <font-awesome-icon icon="user-friends" />
      </RoomTileInfo>
    </div>
    <LightsControl class="mb-16" />

    <AppChart title="Temperature" class="mb-8" />
    <AppChart title="Humidity" />

    <LogsTable title="Logs" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue'
import RoomTileInfo from '@/components/RoomTileInfo.vue'
import LightsControl from '@/components/LightsControl.vue'
import AppChart from '@/components/AppChart.vue'
import LogsTable from '@/components/LogsTable.vue'

export default defineComponent({
  name: 'Room',
  components: {
    RoomTileInfo,
    LightsControl,
    AppChart,
    LogsTable
  },
  setup() {
    const data = reactive<any>({
      temperature: '',
      humidity: ''
    })
    onMounted(() => {
      const socket = new WebSocket('ws://localhost:3000')
      socket.onopen = function() {
        console.log('successfuly connected')
      }
      socket.onmessage = function(msg: any) {
        const [humidity, temperature] = msg.data.split(',')
        data.temperature = `${temperature} C`
        data.humidity = `${humidity}%`
      }
    })
    return { data }
  }
})
</script>

<style></style>
