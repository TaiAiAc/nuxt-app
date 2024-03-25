<script setup lang="ts">
const foo = useFoo()
</script>

<template>
  <div>
    <NuxtLayout name="grid1">
      {{ foo }}
    </NuxtLayout>
  </div>
</template>
