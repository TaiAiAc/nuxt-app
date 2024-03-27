<script lang="ts" setup>

</script>

<template>
  <div>
    <button class="p-10">
      <slot />
    </button>
  </div>
</template>

<style lang="scss" scoped>
button {
  padding: 10px;
  background: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
