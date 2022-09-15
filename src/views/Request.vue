<template>
    <app-loader-vue v-if="loading" ></app-loader-vue>
  <app-page-vue :title="`Заявка`" v-else-if="request">
    <p><strong>Имя владельца: </strong>{{ request.fio }}</p>
    <p><strong>Телефон: </strong>{{ request.phone }}</p>
    <p><strong>Сумма: </strong>{{ request.amount }}</p>
    <p><strong>Статус: </strong> <app-status-vue :type="request.status"></app-status-vue></p>
    <div class="form-control">
      <label for="status">Статус</label>
      <select id="status" v-model="status">
        <option value="done"> Завершен</option>
        <option value="cancelled"> Отменен </option>
        <option value="active"> Активен </option>
        <option value="pending"> Выполняется </option>
      </select>
    </div>
    <button class="btn danger" @click="remove">Удалить</button>

    <button class="btn" v-if="hasChanges" @click="update">Обновить</button>
  
  </app-page-vue>
  <h3 v-else class="text-center text-white">
    Заявки с id {{ $route.params.id }}
  </h3>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import AppLoaderVue from '../components/ui/AppLoader.vue'
import AppPageVue from '../components/ui/AppPage.vue'
import AppStatusVue from '../components/ui/AppStatus.vue'

export default {
    name: 'Request',
    setup() {
        const route = useRoute()
        const router = useRouter()
        console.log(route.params.id)
        const loading = ref(false)
        const request = ref({})
        const store = useStore() 
        console.log(store)
        const status = ref()
        onMounted(async () => {
            loading.value = true
            request.value = await store.dispatch("requestModule/loadingOne", route.params.id)
            loading.value = false
            status.value = request.value?.status
        })

        const hasChanges = computed(() => request.value.status !== status.value)
        const remove = async () => {
          
          await store.dispatch('requestModule/remove', route.params.id)
          router.push('/')

        }
        const update = async () => {
          const data = {...request.value, status: status.value, id: route.params.id}
          await store.dispatch('requestModule/update', data)
          request.value.status = status.value
          console.log(request.value.status)
          console.log(status.value)
          // router.push('/')
        }
        return {
            request,
            loading,
            update,
            remove,
            status,
            hasChanges
        }
    },
    components: {
        AppLoaderVue,
        AppPageVue,
        AppStatusVue
    }

}
</script>

<style>

</style>