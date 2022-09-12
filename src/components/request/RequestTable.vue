<template>
  <h4 v-if="requests.length === 0" class="text-center">Заявок пока нет</h4>
  <table v-else class="table">
    <thead>
      <th>
        #
      </th>
      <th>
        ФИО
      </th>
      <th>
        Телефон
      </th>
      <th>
        Cумма
      </th>
      <th>
        Статус
      </th>
      <th>
        Действие
      </th>
    </thead>
    <tbody>
      <tr v-for="r,ind in requests" :key="r.id">
        <td>{{ ind + 1 }}</td>
        <td>{{ r.fio }}</td>
        <td> {{ r.phone }}</td>
        <td>{{ currency(r.amount) }}</td>
        <td><app-status-vue :type="r.status"></app-status-vue></td>
        <td>
          <router-link custom   :to="{name: 'Request' , params: {id :r.id}}">
              <button class="btn primary">
                Открыть
              </button>
            </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import AppStatusVue from '../ui/AppStatus.vue';
import { currency } from '../../utils/currentcy'

export default {
  props: {
    requests: {
      type: Array,
    },
  },
  setup() {
    return {currency}
  },
  components: {
    AppStatusVue
  }
};
</script>

<style></style>
