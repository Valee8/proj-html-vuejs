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

h1 {

  font-size: 2.5rem;
}

h1,
h2 {
  font-family: 'Lora', serif;
  color: $dark-violet-color;
}

.links {
  display: flex;
  list-style-type: none;
  gap: 20px;
  font-size: 0.6rem;

  a {
    color: $dark-violet-color;
  }
}


.btn {
  padding: 9px 25px;
  border-radius: 3px;
  font-size: 0.7rem;

  &.white {
    background-color: $white-color;
    color: $dark-violet-color;
  }

  &.violet {
    background-color: $dark-violet-color;
    color: $white-color;
  }
}

h5 {
  text-transform: uppercase;
  font-size: 0.6rem;
}

.text-content {

  & *:not(.btn) {
    padding-bottom: 20px;
  }
}
</style>
