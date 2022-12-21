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
  },
  data() {
    return {
      navbarLinks: [
        {
          text: 'Home',
          url: '#',
          current: 'true'
        },
        {
          text: 'Shop',
          url: '#',
          current: 'false'
        },
        {
          text: 'About',
          url: '#',
          current: 'false'
        },
        {
          text: 'Gallery',
          url: '#',
          current: 'false'
        },
        {
          text: 'Locations',
          url: '#',
          current: 'false'
        },
        {
          text: 'Journal',
          url: '#',
          current: 'false'
        },
        {
          text: 'Gallery',
          url: '#',
          current: 'false'
        },
        {
          text: 'Contact',
          url: '#',
          current: 'false'
        },
        {
          text: 'My Account',
          url: '#',
          current: 'false'
        }
      ]
    }
  }
}
</script>

<template>

  <AppHeader :links="navbarLinks" />

  <main>

    <AppMain />

  </main>

  <AppFooter />

</template>

<style lang="scss">
@use '../src/styles/general.scss' as *;
</style>
