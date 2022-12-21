<script>
import AppHeader from './components/AppHeader.vue'

export default {
  name: "App",
  components: {
    AppHeader
  }
}
</script>

<template>

  <AppHeader />

</template>

<style lang="scss">
@use '../src/styles/general.scss' as *;
</style>
