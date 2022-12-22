<script>

export default {
    name: "BottomFooter",
    props: ["social"],
}
</script>

<template>

    <div class="bottom-footer">

        <div class="copyright">
            &copy; Copyright 2012 - 2020 &verbar; Avada Theme by ThemeFusion &verbar; All Rights Reserved &verbar;
            Powered by Wordpress
        </div>

        <ul class="socials">
            <li v-for="(socials, index) in social" :key="index">
                <a :href="socials.url">
                    <font-awesome-icon :icon="socials.icon" />
                </a>
            </li>
        </ul>

    </div>

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../src/styles/partials/variables' as *;

.bottom-footer {
    display: flex;
    justify-content: space-between;
    padding-top: 80px;

    .copyright {
        font-size: 0.6rem;
        color: $text-color;
    }

    .socials {
        display: flex;
        list-style-type: none;
        font-size: 0.8rem;

        li {
            margin: 0 15px;
        }
    }


}
</style>
