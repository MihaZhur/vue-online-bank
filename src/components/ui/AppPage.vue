<template>
  <div class="breadcrumbs" v-if="back">
    <router-link to="/" class="text-white">Вернуться на&nbsp;главную страницу</router-link>
  </div>
  <div class="card">
    <h1 class="card-title">
      {{ title }}
      <slot name="header"></slot>
    </h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AppPage",
  props: {
    title: {
      type: String,
      required: true,
    },
    back: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    document.title = `${this.title} | Клон Банка`;
  },
};
</script>

<style></style>
