<template>
  <div class="home">
    <app-page title="Список заявок" >
      <template #header>
        <button class="btn primary" @click="modal = true">Создать</button>
      </template>
      <request-table :requests="[]"></request-table>
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
import RequestTable from '../components/request/RequestTable.vue'
import AppModalVue from "../components/ui/AppModal.vue";
import RequestModal from "../components/request/RequestModal.vue";
export default {
  data:()=>({
    modal: false
  }),
  methods: {
    close(){
     return this.modal = false
    }
  },
  name: "Home",
  components: {
    AppPage,
    RequestTable,
    AppModalVue,
    RequestModal
  },
};
</script>
