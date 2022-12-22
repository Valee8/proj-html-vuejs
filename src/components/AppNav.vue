<script>

import { store } from '../store.js';


export default {
    name: "AppNav",
    data() {
        return {
            store,
        }
    }
}
</script>

<template>

    <nav>

        <a href="/">
            <img src="/img/avada-bakery-logo.png" alt="logo bakery" class="logo">
        </a>

        <ul class="links">
            <li v-for="(link, index) in store.links" :key="index" :class="{ active: link.current }">
                <a :href="link.url">
                    {{ link.text }}</a>
            </li>
            <li>
                <a href="#">
                    <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                </a>
            </li>
        </ul>
    </nav>

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;

    .logo {
        width: 150px;
    }

    .links {
        text-transform: uppercase;

        li {
            &:nth-child(9) {
                display: none;
            }
        }
    }
}
</style>
