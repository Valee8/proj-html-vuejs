<script>

import TopFooter from '../components/TopFooter.vue'

import BottomFooter from '../components/BottomFooter.vue'

export default {
    name: "AppFooter",
    components: {
        TopFooter,
        BottomFooter
    },
    data() {
        return {
            // Array icone social presenti in BottomFooter
            icons: [
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

        <div class="container">
            <!-- Parte sopra footer -->
            <TopFooter />

            <!-- Parte sotto footer -->
            <BottomFooter :social="icons" />
        </div>


    </footer>

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

footer {
    padding: 50px 0;
}
</style>
