<template>
  <!-- <div class="card">
    <h1> {{ layout }} </h1>
  </div> -->
  <component :is="layout + '-layout-vue'"/>
  <!-- <main-layout-vue></main-layout-vue> -->
  <!-- <auth-layout-vue></auth-layout-vue> -->
</template>


<script>
  import { computed } from 'vue';
import { useRoute } from 'vue-router';
import MainLayoutVue from './layout/MainLayout.vue';
import AuthLayoutVue from './layout/AuthLayout.vue';
export default {
  setup() {
    const route = useRoute()
    console.log(route)

    return {
      layout: computed(() => route.meta.layout)
    }
  },
  components: {
    MainLayoutVue,
    AuthLayoutVue
  }
}
</script>

<style>

</style>
