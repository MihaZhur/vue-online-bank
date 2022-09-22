<template>
  <div class="sidebar" v-if="isOpen">
    <span class="sidebar-close" @click="close" >&times;</span>

    <div class="sidebar-content">
      <p>Добро пожаловать в систему по учету заявок в нашем банке. Здесь вы найдете исчерпывающую информацию про систему и заявки</p>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    const isOpen = computed(() => store.getters['sitebar'])
    return {
      close:() => store.dispatch('sitebarClose'),
      isOpen
    }
  }
}
</script>

<style scoped>

</style>