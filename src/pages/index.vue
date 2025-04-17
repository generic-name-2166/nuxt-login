<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const error = ref("");
const router = useRouter();

const login = async (event: Event) => {
  const form = event.target as HTMLFormElement;
  const data = new FormData(form);
  const username = data.get("username") as string;
  const password = data.get("password") as string;

  error.value = "";
  try {
    const token: { token: string } = await $fetch("/api/login", {
      method: "POST",
      body: {
        username,
        password,
      },
    });
    const cookie = useCookie("token");
    cookie.value = token.token;
  } catch (e) {
    error.value = "Введены неверные данные авторизации. \nПопробуйте ещё раз";
    return;
  }
  router.push("/account");
};
</script>

<template>
  <div :class="$style.div">
    <h2>Login</h2>
    <form :class="$style.form" @submit.prevent="login">
      <label for="username">Username</label>
      <input id="username" type="text" name="username" required />

      <label for="password">Password</label>
      <input id="password" type="password" name="password" required />

      <p>{{ error }}</p>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<style lang="scss" module>
.div {
  margin-inline: 30%;
}

.form {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}
</style>
