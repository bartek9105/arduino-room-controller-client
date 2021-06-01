<template>
  <div class="shadow-md text-blue-500 font-bold cursor-pointer">
    <nav>
      <ul>
        <router-link to="/room">
          <li class="px-4 py-4 pr-24 flex items-center rounded-2xl">
            Room controller
          </li>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppSideNavbar'
})
</script>

<style></style>
