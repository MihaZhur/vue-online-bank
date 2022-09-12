<template>
  <div class="home">
    <app-loader v-if="loading"></app-loader>
    <app-page v-else title="Список заявок" >
      <template #header>
        <button class="btn primary" @click="modal = true">Создать</button>
      </template>
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
import AppModalVue from "../components/ui/AppModal.vue";
import RequestModal from "../components/request/RequestModal.vue";

export default {
  data:()=>({
    modal: false,
    loading: false
    // requests: []
  }),
  computed: {
    requests(){
      return this.$store.getters['requestModule/requests']
    }
  },
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
  name: "Home",
  components: {
    AppPage,
    RequestTable,
    AppModalVue,
    RequestModal,
    AppLoader
  },
};
</script>
