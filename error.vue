<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()
</script>

<template>
  <div>
    <h1>{{ error.statusCode }}</h1>

    <UButton to="/">
      Go back home
    </UButton>
  </div>
</template>
