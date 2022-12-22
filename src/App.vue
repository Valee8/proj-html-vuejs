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
  font-family: $font-family-lora;
  color: $dark-violet-color;
}

.links {
  display: flex;
  list-style-type: none;
  text-align: center;

  a {
    color: $dark-violet-color;

    &:not(.active):hover {
      text-decoration: underline;
    }
  }
}


.btn {
  padding: 9px 25px;
  border-radius: 5px;
  font-size: 0.7rem;

  &.white {
    background-color: $white-color;
    color: $dark-violet-color;

    &:hover {
      background-color: $dark-violet-color;
      color: #ece8f2;
    }
  }

  &.violet {
    background-color: $dark-violet-color;
    color: $white-color;

    &:hover {
      color: $dark-violet-color;
      background-color: #f0edf5;
    }
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

.left-arrow {
  left: 0;
}

.right-arrow {
  right: 0;
}

.left-arrow,
.right-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #a691b2;
  padding: 22px 11px;
  color: $white-color;
  font-size: 0.9rem;
  z-index: 20;

  a {
    color: #e9dedc;
  }
}
</style>
