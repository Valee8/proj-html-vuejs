<script>

export default {
    name: "OurProducts",
}
</script>

<template>

    <!-- Sezione Our Products -->
    <section>

        <div class="container">

            <!-- Parte sulla sinistra con titoli e bottone -->
            <div class="text-content">
                <!-- Titoli -->
                <h5>
                    Our Products
                </h5>

                <h2>
                    All our delectable pastries are backed fresh in our Kitchen very morning, and are made with
                    all-natural, all organic ingredients
                </h2>

                <!-- Bottone -->
                <a href="#" class="btn violet">
                    Start Shopping
                </a>
            </div>

            <!-- Parte immagini a sinistra -->
            <div class="img-content">
                <img src="/img/choco-chip-cookies-400x510.jpg" alt="Choco Chip Cookies">

                <!-- Freccia sinistra -->
                <a href="#" class="left-arrow">
                    <font-awesome-icon icon="fa-solid fa-angle-left" />
                </a>

                <!-- Contenuto immagini che appare all'hover -->
                <div class="hover-content">
                    <div class="hover-titles">
                        <h3>
                            Choco Chip Cookies
                        </h3>

                        <h6>
                            Cookies, Pastries
                        </h6>

                        <h3>
                            <span>&dollar;19.00</span> <span>&dollar;39.00</span>
                        </h3>
                    </div>
                </div>

            </div>

            <div class="img-content">

                <img src="/img/strawberry-jam-cookies-400x510.jpg" alt="Straberry Jam Cookies">

                <!-- Freccia destra -->
                <a href="#" class="right-arrow">
                    <font-awesome-icon icon="fa-solid fa-angle-right" />
                </a>


                <!-- Contenuto immagini che appare all'hover -->
                <div class="hover-content">
                    <div class="hover-titles">
                        <h3>
                            Strawberry Jam Cookies
                        </h3>

                        <h6>
                            Cookies, Pastries
                        </h6>

                        <h3>
                            <span>&dollar;24.00</span> <span>&dollar;62.00</span>
                        </h3>
                    </div>
                </div>

            </div>
        </div>

    </section>

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

.container {
    display: flex;
    gap: 14px;

    div {
        width: calc(100% / 3);

        h5 {
            color: $text-color;
        }

        h2 {
            padding-bottom: 60px;
        }
    }

    .img-content {
        position: relative;

        &:hover .hover-content {
            display: block;
        }

        .hover-content {
            background-color: rgba(0, 0, 0, .2);
            top: 0;
            position: absolute;
            height: 100%;
            width: 100%;
            text-align: center;
            display: none;
            z-index: 1;

            .hover-titles {
                width: 100%;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                color: $white-color;
                text-shadow: 0 1px 0 #000;

                h6 {
                    padding: 13px 0;
                    font-weight: normal;
                }

                h3 {

                    span {
                        padding: 0 5px;
                    }

                    &:last-of-type {
                        font-weight: normal;
                    }

                    &:first-of-type {
                        font-family: $font-family-lora;
                    }
                }
            }
        }

        img {
            vertical-align: middle;
            width: 100%;
        }

    }
}
</style>
