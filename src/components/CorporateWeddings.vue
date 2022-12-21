<script>

export default {
    name: "CorporateWeddings",
}
</script>

<template>

    <section>

        <div class="container">
            <div class="text-content">
                <h5>
                    Corporate &amp; Weddings
                </h5>

                <h2>
                    Baking Special Moments
                </h2>
            </div>

            <div class="img-content">
                <img src="/img/corporate-bg.jpg" alt="Corporate">
                <img src="/img/wedding-bg.jpg" alt="Wedding">
            </div>
        </div>

    </section>

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

section {
    text-align: center;

    img {
        width: calc(50% - 40px);
        margin: 0 20px;
    }

}
</style>
