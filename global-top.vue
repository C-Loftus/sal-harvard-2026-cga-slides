<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'

// Title and closing slides carry their own branding; every other slide gets
// the gradient stripe and a small CGS footer with the page count.
const { currentLayout, currentPage, currentSlideRoute, total } = useNav()
const show = computed(() => !['cover', 'center'].includes(currentLayout.value))
// Crowded slides can set `hideLogo: true` in their frontmatter to drop the footer logo.
const showLogo = computed(() => !currentSlideRoute.value?.meta?.slide?.frontmatter?.hideLogo)
</script>

<template>
  <template v-if="show">
    <div class="cgs-stripe" />
    <div class="cgs-footer">
      <img v-if="showLogo" src="/cgs-logo-color.png" alt="Center for Geospatial Solutions">
      <span v-else />
      <span>{{ currentPage }} / {{ total }}</span>
    </div>
  </template>
</template>
