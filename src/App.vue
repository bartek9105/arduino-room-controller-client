<template>
  <div class="flex">
    <AppSideNavbar class="w-1/6" />
    <div class="mx-auto py-16">
      <router-view class="max-w-screen-xl" />
    </div>
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
