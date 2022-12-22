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

    <!-- Nav -->
    <nav>

        <!-- Logo -->
        <a href="/">
            <img src="/img/avada-bakery-logo.png" alt="logo bakery" class="logo">
        </a>

        <!-- Links navbar -->
        <ul class="links">
            <li v-for="(link, index) in store.links" :key="index">
                <a :href="link.url" :class="{ active: link.current }">
                    {{ link.text }}

                    <div :class="{ border: link.current }"></div>
                </a>
            </li>
            <!-- Carrello -->
            <li class="shopping">
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

header {
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
            gap: 20px;
            font-size: 0.6rem;

            li {
                position: relative;

                a {
                    text-align: center;


                    .border {
                        background-color: $dark-violet-color;
                        height: 2px;
                        width: 30px;
                        margin: 3px auto 0 auto;
                    }

                    &:nth-child(9) {
                        display: none;
                    }
                }
            }
        }
    }
}

.top-footer {

    .logo {
        width: 130px;
    }

    .links {
        padding-top: 30px;
        gap: 40px;
        font-size: 0.7rem;

        li {

            &.shopping {

                a {
                    &:hover {
                        text-decoration: none;
                    }
                }

                a::after {
                    content: "0";
                    padding: 2px 5px;
                    border-radius: 50%;
                    background-color: #f0edf5;
                    margin-left: 4px;
                }
            }

            &:first-child,
            &:nth-child(8) {
                display: none;

            }
        }
    }
}
</style>
