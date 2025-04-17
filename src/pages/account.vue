<script setup lang="ts">
const data: { data: string }[] = [];
console.log(data);

const router = useRouter();

const click = (): void => {
  sessionStorage.removeItem("token");
  console.log("a");
  router.push("/");
}
</script>

<template>
  <div :class="$style.div">
    <button type="button" @click="click">Log out</button>
  </div>
</template>

<style lang="scss" module>
.div {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
