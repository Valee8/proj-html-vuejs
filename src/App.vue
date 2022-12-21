<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  }
}
</script>

<template>

  <AppHeader />

  <main>

    <AppMain />

  </main>

  <AppFooter />

</template>

<style lang="scss">
@use '../src/styles/general.scss' as *;
@use '../src/styles/partials/variables' as *;


.btn {
  background-color: $white-color;
  color: $dark-violet-color;
  padding: 9px 25px;
  border-radius: 3px;
  font-size: 0.7rem;
}
</style>
