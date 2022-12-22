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

                <!-- Icone in alto a destra - appaiono all'hover -->
                <ul class="header-icons">

                    <li>
                        <a href="#">
                            <font-awesome-icon icon="fa-solid fa-folder" />
                            <div class="text-icon">
                                Demos
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <div class="number">
                                <sup>
                                    &dollar;
                                </sup>
                                39
                            </div>
                            <div class="text-icon">
                                On sale
                            </div>
                        </a>
                    </li>

                </ul>

                <!-- Parte immagine Corporate -->
                <div class="image">
                    <img src="/img/corporate-bg.jpg" alt="Corporate" class="img">
                    <img src="/img/corporate-hover-bg.jpg" alt="Corporate" class="img-hover">

                    <!-- Info immagine Corporate che appare all'hover -->
                    <div class="content-hover">

                        <!-- Titoli -->
                        <h5>
                            International Bakery
                        </h5>

                        <h2>
                            Corporate Events
                        </h2>

                        <!-- Bottone -->
                        <a href="#" class="btn violet">
                            Explore More
                        </a>

                    </div>
                </div>

                <!-- Parte immagine Weddings -->
                <div class="image">
                    <img src="/img/wedding-bg.jpg" alt="Wedding" class="img">
                    <img src="/img/wedding-hover-bg.jpg" alt="Wedding" class="img-hover">

                    <!-- Info immagine Weddings che appare all'hover -->
                    <div class="content-hover">

                        <!-- Titoli -->
                        <h5>
                            Private Dining Hall
                        </h5>

                        <h2>
                            Weddings &amp; Parties
                        </h2>

                        <!-- Bottone -->
                        <a href="#" class="btn violet">
                            Explore More
                        </a>

                    </div>
                </div>
            </div>
        </div>

    </section>

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

section {
    text-align: center;
    padding: 80px 0;

    .text-content {
        padding-bottom: 25px;


        h5 {
            color: $text-color;
        }
    }

    .img-content {
        display: flex;
        position: relative;

        &:hover .header-icons {
            display: block;
        }

        .header-icons {
            right: 0;
            display: none;
            right: -60px;
            top: 0;
        }

        .image {
            width: calc(50% - 35px);
            margin: 0 35px;
            position: relative;

            &:first-child {
                margin-left: 0;
            }

            &:last-child {
                margin-right: 0;
            }

            .img-hover {
                display: none;
            }

            &:hover .img {
                display: none;
            }

            &:hover .content-hover,
            &:hover .img-hover {
                display: block;
            }

            .content-hover {
                display: none;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);

                h5 {
                    color: $white-color;
                    text-shadow: 0 1px 0 #000;
                }

                h2 {
                    padding: 15px 0 20px 0;
                    color: $white-color;
                    text-shadow: 0 1px 0 #000;
                }
            }
        }
    }

}
</style>
