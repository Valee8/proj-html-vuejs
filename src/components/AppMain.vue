<script>

import OurProducts from '../components/OurProducts.vue'
import CorporateWeddings from '../components/CorporateWeddings.vue'
import ListProducts from '../components/ListProducts.vue'
import ProcessProducts from '../components/ProcessProducts.vue'
import Locations from '../components/Locations.vue'
import Sharing from '../components/Sharing.vue'
import OrderProducts from '../components/OrderProducts.vue'

export default {
    name: "AppMain",
    components: {
        OurProducts,
        CorporateWeddings,
        ListProducts,
        ProcessProducts,
        Locations,
        Sharing,
        OrderProducts
    }
}
</script>

<template>

    <OurProducts />

    <CorporateWeddings />

    <ListProducts />

    <ProcessProducts />

    <Locations />

    <Sharing />

    <OrderProducts />

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

section {
    padding: 80px 0;
}
</style>
