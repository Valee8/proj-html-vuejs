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

        <a href="/">
            <img src="/img/avada-bakery-logo.png" alt="logo bakery" class="logo">
        </a>

        <nav>
            <ul class="links">
                <li v-for="(link, index) in navbarLinks" :key="index" :class="{ active: link.current }">
                    <a :href="link.url">
                        {{ link.text }}</a>
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
        </div>

    </header>

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;


header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-image: url('/img/hero-header-bakery.jpg');
    background-position: 0 -60px;
    background-size: cover;

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

    .jumbotron {
        width: 100%;
        min-height: 530px;
        padding: 80px 60px 0 60px;

        .header-content {
            width: 350px;
            color: $text-color;

            &>*:not(.btn) {
                padding-bottom: 20px;
            }

            h1 {
                color: $dark-violet-color;
            }

        }
    }
}
</style>
