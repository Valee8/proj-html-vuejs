<script>

import OurProducts from '../components/OurProducts.vue'


export default {
    name: "AppMain",
    components: {
        OurProducts,
    }
}
</script>

<template>

    <OurProducts />

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

section {
    padding: 100px 0;
}

#corporate-weddings {
    text-align: center;

    img {
        width: 50%;
    }
}
</style>
