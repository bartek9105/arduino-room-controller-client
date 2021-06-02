<template>
  <div>
    <h2 class="text-lg font-bold text-gray-500 mb-4">Room</h2>
    <div class="flex justify-between flex-wrap">
      <RoomTileInfo
        class="mb-16 mr-4"
        name="Temperature"
        :data="data.temperature"
      >
        <font-awesome-icon icon="temperature-high" />
      </RoomTileInfo>
      <RoomTileInfo class="mb-16 mr-4" name="Humidity" :data="data.humidity">
        <font-awesome-icon icon="tint" />
      </RoomTileInfo>
      <RoomTileInfo
        class="mb-16"
        name="Motion sensor"
        :data="data.motionSensor"
      >
        <font-awesome-icon icon="user-friends" />
      </RoomTileInfo>
    </div>
    <LightsControl class="mb-16" />

    <AppChart
      v-if="roomStats.temps && roomStats.dates"
      title="Temperature"
      class="mb-8"
      :data="roomStats.temps"
      :dates="roomStats.dates"
    />
    <AppChart
      v-if="roomStats.humidity && roomStats.dates"
      title="Humidity"
      :data="roomStats.humidity"
      :dates="roomStats.dates"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue'
import RoomTileInfo from '@/components/RoomTileInfo.vue'
import LightsControl from '@/components/LightsControl.vue'
import AppChart from '@/components/AppChart.vue'
import axios from 'axios'

export default defineComponent({
  name: 'Room',
  components: {
    RoomTileInfo,
    LightsControl,
    AppChart
  },
  setup() {
    const data = reactive<any>({
      temperature: '',
      humidity: ''
    })

    const roomStats = reactive<any>({})

    const fetchRoomStats = async () => {
      try {
        const data = await axios.get('http://localhost:3000/room-stats')
        const temps = data.data.map((el: any) => el.temperature)
        const humidity = data.data.map((el: any) => el.humidity)
        const dates = data.data.map((el: any) => el.createdAt.substring(11, 19))
        roomStats.temps = temps
        roomStats.humidity = humidity
        roomStats.dates = dates
        console.log(roomStats)
      } catch (error) {
        console.log(error)
      }
    }

    onMounted(async () => {
      await fetchRoomStats()
      const socket = new WebSocket('ws://localhost:3000')
      socket.onopen = function() {
        console.log('successfuly connected')
      }
      socket.onmessage = function(msg: any) {
        const [humidity, temperature, motionSensor] = msg.data.split(',')
        data.temperature = `${temperature} C`
        data.humidity = `${humidity}%`
        data.motionSensor = motionSensor
      }
    })
    return { data, fetchRoomStats, roomStats }
  }
})
</script>

<style></style>
