<script setup lang="ts">
const { setLocale } = useI18n()
</script>

<template>
  <UButton @click="setLocale('zh-CN')">
    zh-CN
  </UButton><br>
  <UButton @click="setLocale('en-US')">
    en-US
  </UButton>
  <p>{{ $t('text') }}</p>
  <p>{{ $t('demo') }}</p>
  <p>{{ $t('demo.text') }}</p>
  <p>{{ $t('demo.text.test') }}</p>
</template>
