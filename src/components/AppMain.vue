<script>

import OurProducts from '../components/OurProducts.vue'
import CorporateWeddings from '../components/CorporateWeddings.vue'
import ListProducts from '../components/ListProducts.vue'
import ProcessProducts from '../components/ProcessProducts.vue'
import Locations from '../components/Locations.vue'


export default {
    name: "AppMain",
    components: {
        OurProducts,
        CorporateWeddings,
        ListProducts,
        ProcessProducts,
        Locations,
    }
}
</script>

<template>

    <OurProducts />

    <CorporateWeddings />

    <ListProducts />

    <ProcessProducts />

    <Locations />

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

section {
    padding: 100px 0;
}
</style>
