<template>
  <div>
  <SidebarComponent/>
  <RouterView />
  </div>
</template>

<script setup>
import SidebarComponent from './components/TheSidebarComponent.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

