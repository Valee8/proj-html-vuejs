<script>

export default {
    name: "AppHeader",
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

    <header>

        <nav>

            <a href="/">
                <img src="/img/avada-bakery-logo.png" alt="logo bakery" class="logo">
            </a>

            <ul class="links">
                <li v-for="(link, index) in navbarLinks" :key="index" :class="{ active: link.current }">
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

        <div class="jumbotron">

            <div class="header-content">
                <div class="header-title">
                    Fresh &amp; Tasty Bakery Everyday
                </div>

                <h1>
                    The Perfect Fresh Bread
                </h1>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita veniam illum corrupti commodi iste
                    asperiores
                </p>

                <a href="#" class="btn">
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
            display: flex;
            list-style-type: none;
            gap: 20px;
            font-size: 0.6rem;
            text-transform: uppercase;

            a {
                color: $dark-violet-color;
            }
        }
    }

    .jumbotron {
        width: 100%;
        min-height: 540px;
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

        .header-content {
            width: 350px;
            color: $text-color;

            & *:not(.btn) {
                padding-bottom: 20px;
            }

            h1 {
                color: $dark-violet-color;
            }

        }
    }
}
</style>
