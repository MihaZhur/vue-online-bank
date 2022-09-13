<template>
  <div class="home">
    <app-loader v-if="loading"></app-loader>
    <app-page v-else title="Список заявок" >
      <template #header>
        <button class="btn primary" @click="modal = true">Создать</button>
      </template>
      <request-filte-vue v-model="filter"></request-filte-vue>
      <request-table :requests="requests"></request-table>
      <teleport to="body">
        <app-modal-vue v-if="modal" title="Создать заявку" @close="close">
          <request-modal @created="close"/>
        </app-modal-vue>
      </teleport>
    </app-page>

  </div>
</template>

<script>
import AppPage from "../components/ui/AppPage.vue";
import AppLoader from '../components/ui/AppLoader.vue'
import RequestTable from '../components/request/RequestTable.vue'
import RequestFilteVue from "../components/request/RequestFilte.vue";
import AppModalVue from "../components/ui/AppModal.vue";
import RequestModal from "../components/request/RequestModal.vue";
import { ref, watch, computed } from 'vue';
import { useStore } from 'vuex';

export default {
  data:()=>({
    modal: false,
    loading: false,

    // requests: []
  }),
  mounted() {
    this.loadingRequest()
  },
  methods: {
    close(){
     return this.modal = false
    },
    async loadingRequest () {
      this.loading = true
      await this.$store.dispatch('requestModule/load')
      this.loading = false
    } 
  
  },
  setup() {
    const store = useStore()
    const filter = ref({})
    watch(filter, val => console.log(val))
    const requests = computed(() => store.getters['requestModule/requests']
      .filter(request => {
        if(filter.value.name) {
          return request.fio.includes(filter.value.name)
        }
        return request
      })
      .filter(request => {
        if(filter.value.status){
          return filter.value.status === request.status
        }
        return request
      })
    )
    return {
      filter,
      requests
    }
  },
  
  name: "Home",
  components: {
    AppPage,
    RequestTable,
    AppModalVue,
    RequestModal,
    AppLoader,
    RequestFilteVue
  },
};
</script>
