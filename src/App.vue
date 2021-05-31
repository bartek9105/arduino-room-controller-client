<template>
  <div class="flex">
    <AppSideNavbar />
    <router-view class="flex-1" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppSideNavbar from '@/components/AppSideNavbar.vue'

export default defineComponent({
  components: {
    AppSideNavbar
  }
})
</script>

<style lang="scss">
body {
  background-color: #f9fafb;
}
</style>
