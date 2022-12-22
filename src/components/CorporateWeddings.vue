<script>

export default {
    name: "CorporateWeddings",
}
</script>

<template>

    <!-- Sezione Corporate e Weddings -->
    <section>

        <div class="container">
            <!-- Contenuto con testo -->
            <div class="text-content">
                <!-- Titoli -->
                <h5>
                    Corporate &amp; Weddings
                </h5>

                <h2>
                    Baking Special Moments
                </h2>
            </div>

            <!-- Contenuto con immagini -->
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

    .text-content {
        padding-bottom: 25px;


        h5 {
            color: $text-color;
        }
    }

    img {
        width: calc(50% - 35px);
        margin: 0 35px;

        &:first-child {
            margin-left: 0;
        }

        &:last-child {
            margin-right: 0;
        }
    }

}
</style>
