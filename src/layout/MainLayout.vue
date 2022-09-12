<template>
    <the-navbar></the-navbar>

  <div class="container with-nav">
    <app-message-vue></app-message-vue>
    <router-view></router-view>
  </div>
</template>

<script>
import AppMessageVue from "../components/ui/AppMessage.vue";
import TheNavbar from "../components/TheNavbar";
export default {
  components: {
    TheNavbar,
    AppMessageVue
  },
};
</script>

<style></style>
