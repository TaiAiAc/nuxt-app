<script setup lang="ts">
const { setLocale } = useI18n()
const { locale } = useAppConfig()

setLocale(locale)
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
