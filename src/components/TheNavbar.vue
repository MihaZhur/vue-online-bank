<template>
  <nav class="navbar">
    <h3>Online bank</h3>
    <ul class="navbar-menu">
        <li>
            <router-link to="/">Заявки</router-link>
        </li>
        <li>
            <router-link to="/">Помощь</router-link>
        </li>
    
        <li>
            <a href="#">Сообщения </a>
        </li>
        <li>
            <a @click.prevent="logout" href="#" >Выход</a>
        </li>
    </ul>
  </nav>
</template>

<script>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
export default {
    name: 'TheNavbar',
    setup() {
        const store = useStore()
        const router = useRouter()
        return {
            logout: () => {
                store.commit('authModule/logout')
                router.push('/auth')
            }
        }
    }
}
</script>

<style>

</style>