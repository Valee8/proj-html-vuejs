<script>

import { store } from '../store.js';

export default {
    name: "AppFooter",
    data() {
        return {
            store,
        }
    }
}
</script>

<template>

    <footer>
        <div class="top-footer">

            <img src="/img/avada-bakery-logo.png" alt="logo bakery" class="logo">

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

        </div>

        <div class="bottom-footer">

        </div>


    </footer>

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

.logo {
    width: 120px;
}

.links {
    li {
        &:first-child {
            display: none;
        }
    }
}
</style>
