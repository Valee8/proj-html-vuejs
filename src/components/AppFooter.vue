<script>

import TopFooter from '../components/TopFooter.vue'

import { store } from '../store.js';

export default {
    name: "AppFooter",
    components: {
        TopFooter
    },
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

        <TopFooter />


        <div class="bottom-footer">

            &copy; Copyright 2012 - 2020 &verbar; Avada Theme by ThemeFusion &verbar; All Rights Reserved &verbar;
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
</style>
