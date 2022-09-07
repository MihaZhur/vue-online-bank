<template>
  <div class="container">
    <app-message-vue />
    <router-view></router-view>
  </div>
</template>

<script>
import AppMessageVue from "../components/ui/AppMessage.vue";
export default {
    components: {
        AppMessageVue
    }
};
</script>

<style></style>
