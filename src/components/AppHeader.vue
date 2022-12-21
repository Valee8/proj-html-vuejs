<script>

export default {
    name: "AppHeader",
    props: ["links"],
    data() {
        return {

        }
    }
}
</script>

<template>

    <header>

        <img src="/img/avada-bakery-logo.png" alt="logo bakery" class="logo">

        <nav>
            <ul class="links">
                <li v-for="(link, index) in links" :key="index" :class="{ active: link.current }">
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
