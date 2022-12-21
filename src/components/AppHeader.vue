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

    </header>

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    .links {
        display: flex;
        list-style-type: none;
        gap: 10px;
    }
}
</style>
