<template>
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
    name: 'AppPage',
    props: {
        title: {
            type: String,
            required: true
        }
    },
    mounted() {
        document.title = `${this.title} | Клон Банка`
    }
}
</script>

<style>

</style>