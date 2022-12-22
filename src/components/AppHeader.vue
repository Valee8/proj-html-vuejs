<script>

import AppNav from '../components/AppNav.vue'

import AppJumbotron from '../components/AppJumbotron.vue'

export default {
    name: "AppHeader",
    components: {
        AppNav,
        AppJumbotron
    }
}
</script>

<template>

    <header>

        <!-- Nav -->
        <AppNav />

        <!-- Jumbotron -->
        <AppJumbotron />

    </header>

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;


header {
    background-image: url('/img/hero-header-bakery.jpg');
    background-size: cover;

}
</style>
