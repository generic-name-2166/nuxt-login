<script setup lang="ts">
interface Product {
  id: number;
  status: string;
  date_created: Date;
  name: string;
  price: number;
}

definePageMeta({
  middleware: [
    (to, _from) => {
      const authenticated = useCookie("token");
      if (to.fullPath === "/account" && !authenticated.value) {
        return navigateTo("/");
      }
    },
  ],
});

const router = useRouter();

const { data } = await useFetch("/api/data");
type Products = typeof data;

const click = (): void => {
  const cookie = useCookie("token");
  cookie.value = "";
  router.push("/");
};

interface FilterView {
  status: string;
  date_created: number[];
  name: string;
}

const filterObj = ref<FilterView>({ status: "", date_created: [], name: "" });

const setDate = (event: Event) => {
  const options = (event.target as HTMLSelectElement).selectedOptions;
  filterObj.value.date_created = Array.from(options).map((option) =>
    parseInt(option.value),
  );
};

function filterView(data: Products, filterObj: FilterView): Product[] {
  return (
    data.value
      ?.filter((row) => {
        if (filterObj.status.length > 0 && row.status !== filterObj.status) {
          return false;
        } else if (
          filterObj.date_created.length > 0 &&
          !filterObj.date_created.includes(row.date_created)
        ) {
          return false;
        }
        return filterObj.name.length === 0 || row.name.includes(filterObj.name);
      })
      .map((row) => ({
        id: row.id,
        status: row.status,
        date_created: new Date(row.date_created),
        name: row.name,
        price: row.price,
      })) ?? []
  );
}

const view = computed(() => filterView(data, filterObj.value));
</script>

<template>
  <div :class="$style.div">
    <header>
      <button type="button" @click="click">Log out</button>
    </header>
    <main :class="$style.main">
      <div>
        <div :class="$style.filter">
          <label>Choose dates</label>
          <select multiple size="5" @change="setDate">
            <option
              v-for="date in data?.map((row) => new Date(row.date_created))"
              :key="date.valueOf()"
              :value="date.valueOf()"
            >
              {{ date }}
            </option>
          </select>
        </div>
      </div>
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
          <tr v-for="row in view" :key="row.id">
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

.filter {
  display: flex;
  flex-direction: column;
}

.main {
  display: flex;
  flex-direction: column;
}

.table {
  border: 1px solid black;
  border-collapse: collapse;
}

.td {
  padding: 0.5rem;
}
</style>
