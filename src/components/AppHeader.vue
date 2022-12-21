<script>

import AppNav from '../components/AppNav.vue'

export default {
    name: "AppHeader",
    components: {
        AppNav
    }
}
</script>

<template>

    <header>

        <AppNav />

        <div class="jumbotron">

            <div class="text-content">
                <h5>
                    Fresh &amp; Tasty Bakery Everyday
                </h5>

                <h1>
                    The Perfect Fresh Bread
                </h1>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita veniam illum corrupti commodi iste
                    asperiores
                </p>

                <a href="#" class="btn white">
                    Explore our products
                </a>

            </div>

            <ul class="header-icons">

                <li>
                    <a href="#">
                        Icona
                    </a>
                </li>

                <li>
                    <a href="#">
                        <div class="number">
                            <sup>
                                &dollar;
                            </sup>
                            39
                        </div>
                        <div class="on-sale">
                            On sale
                        </div>
                    </a>
                </li>

            </ul>
        </div>

    </header>

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;


header {
    background-image: url('/img/hero-header-bakery.jpg');
    background-position: 0 -60px;
    background-size: cover;

    .jumbotron {
        width: 100%;
        min-height: 530px;
        padding: 120px 0 0 80px;
        position: relative;

        .header-icons {
            list-style-type: none;
            position: absolute;
            right: 13px;
            top: 40px;
            text-align: center;

            li {
                background-color: $white-color;
                margin: 5px 0;
                border-radius: 3px;
                padding: 7px 4px;
                font-weight: bold;
                box-shadow: 0 0 20px rgba(0, 0, 0, .2);

                .number {
                    color: #65bc7b;
                    font-size: 1.2rem;

                    sup {
                        font-size: 0.8rem;
                        letter-spacing: -2px;
                    }
                }

                .on-sale {
                    font-size: 0.6rem;
                }
            }
        }

        .text-content {
            width: 350px;
            color: $text-color;

            h1 {
                color: $dark-violet-color;
            }

        }
    }
}
</style>
