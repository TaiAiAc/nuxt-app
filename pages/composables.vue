<script setup lang="ts">
const { t } = useI18n()
const foo = useFoo()
</script>

<template>
  <div>
    <NuxtLayout name="grid1">
      {{ foo }}
      {{ $t('Documentation.title') }}
      {{ t('Documentation.title') }}
    </NuxtLayout>
  </div>
</template>
