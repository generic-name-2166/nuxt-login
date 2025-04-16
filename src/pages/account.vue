<script setup lang="ts">
import { useFetch } from "#app";

const { data } = await useFetch("/api/account");
console.log(data);
</script>

<template>
  <div :class="$style.div"></div>
</template>

<style lang="scss" module>
.div {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
