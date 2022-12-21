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
</style>
