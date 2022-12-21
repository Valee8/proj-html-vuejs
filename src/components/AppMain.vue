<script>

import OurProducts from '../components/OurProducts.vue'
import CorporateWeddings from '../components/CorporateWeddings.vue'


export default {
    name: "AppMain",
    components: {
        OurProducts,
        CorporateWeddings
    }
}
</script>

<template>

    <OurProducts />

    <CorporateWeddings />

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

section {
    padding: 100px 0;
}
</style>
