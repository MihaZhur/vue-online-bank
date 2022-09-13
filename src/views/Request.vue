<template>
    <app-loader-vue v-if="loading" ></app-loader-vue>
  <app-page-vue :title="`Заявка`" v-else-if="request">
    {{ request }}
  </app-page-vue>
  <h3 v-else class="text-center text-white">
    Заявки с id {{ $route.params.id }}
  </h3>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import AppLoaderVue from '../components/ui/AppLoader.vue'
import AppPageVue from '../components/ui/AppPage.vue'
export default {
    name: 'Request',
    setup() {
        const route = useRoute()
        console.log(route.params.id)
        const loading = ref(false)
        const request = ref({})
        const store = useStore() 
        console.log(store)
        onMounted(async () => {
            loading.value = true
            request.value = await store.dispatch("requestModule/loadingOne", route.params.id)
            loading.value = false
        })
        return {
            request,
            loading
        }
    },
    components: {
        AppLoaderVue,
        AppPageVue
    }

}
</script>

<style>

</style>