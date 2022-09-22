<template>
    <the-navbar></the-navbar>
  <the-sidebar-vue ></the-sidebar-vue>
  <div class="container with-nav">
    <app-message-vue></app-message-vue>
    <router-view></router-view>
  </div>
</template>

<script>
import AppMessageVue from "../components/ui/AppMessage.vue";
import TheNavbar from "../components/TheNavbar";
import TheSidebarVue from "../components/TheSidebar.vue";
export default {
  components: {
    TheNavbar,
    AppMessageVue,
    TheSidebarVue
  },
};
</script>

<style></style>
