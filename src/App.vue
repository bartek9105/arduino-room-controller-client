<template>
  <AppNavbar />
  <div class="w-9/12 mx-auto px-8 py-16">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppNavbar from '@/components/AppNavbar.vue'

export default defineComponent({
  components: {
    AppNavbar
  }
})
</script>

<style lang="scss">
body {
  background-color: #f9fafb;
}
</style>
