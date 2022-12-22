<script>

import { store } from '../store.js';

export default {
    name: "AppFooter",
    data() {
        return {
            store,
            socials: [
                {
                    icon: 'fa-brands fa-instagram',
                    url: '#'
                },
                {
                    icon: 'fa-brands fa-twitter',
                    url: '#'
                },
                {
                    icon: 'fa-brands fa-facebook-f',
                    url: '#'
                },
                {
                    icon: 'fa-brands fa-pinterest-p',
                    url: '#'
                }
            ]
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

            <h4>
                Subscribe to our Newsletter
            </h4>

            <input type="search" placeholder="Enter email address*">
            <button>Subscribe</button>

        </div>

        <div class="bottom-footer">

            &commat; Copyright 2012 - 2020 &verbar; Avada Theme by ThemeFusion &verbar; All Rights Reserved &verbar;
            Powered by Wordpress


            <ul>
                <li v-for="social in socials" :key="index">
                    <a :href="social.url">
                        <font-awesome-icon :icon="social.icon" />
                    </a>
                </li>
            </ul>

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
