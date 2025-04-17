import { defineNuxtRouteMiddleware, navigateTo, useCookie } from "nuxt/app";

export default defineNuxtRouteMiddleware((to, _from) => {
  const authenticated = useCookie("token");
  if (to.fullPath === "/account" && !authenticated.value) {
    return navigateTo("/");
  }
});
