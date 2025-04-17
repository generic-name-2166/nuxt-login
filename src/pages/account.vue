<script setup lang="ts">
/* interface Product {
  id: number;
  status: string;
  date_created: Date;
  name: string;
  price: bigint;
} */

definePageMeta({
  middleware: ["auth"],
});

const router = useRouter();

const { data } = await useFetch("/api/data");

const click = (): void => {
  const cookie = useCookie("token");
  cookie.value = "";
  router.push("/");
};
</script>

<template>
  <div :class="$style.div">
    <header>
      <button type="button" @click="click">Log out</button>
    </header>
    <main>
      <table :class="$style.table">
        <thead>
          <tr>
            <th :class="$style.td">ID</th>
            <th :class="$style.td">Status</th>
            <th :class="$style.td">Date created</th>
            <th :class="$style.td">Name</th>
            <th :class="$style.td">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in data" :key="row.id">
            <td :class="$style.td">{{ row.id }}</td>
            <td :class="$style.td">{{ row.status }}</td>
            <td :class="$style.td">{{ row.date_created }}</td>
            <td :class="$style.td">{{ row.name }}</td>
            <td :class="$style.td">{{ row.price }}</td>
          </tr>
        </tbody>
      </table>
    </main>
  </div>
</template>

<style lang="scss" module>
.div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.table {
  border: 1px solid black;
  border-collapse: collapse;
}

.td {
  padding: 0.5rem;
}
</style>
