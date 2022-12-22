<script>

export default {
    name: "ListProducts",
    data() {
        return {
            products: [
                {
                    nameProduct: 'Choco Chip Cookies',
                    img: '/img/choco-chip-cookies-200x255.jpg',
                    price: '$19.00 - $39.00'
                },
                {
                    nameProduct: 'Strawberry Jam Cookies',
                    img: '/img/strawberry-jam-cookies-200x255.jpg',
                    price: '$24.00 - $62.00'
                },
                {
                    nameProduct: 'Strawberry Donut',
                    img: '/img/strawberry-donut-200x255.jpg',
                    price: '$24.00 - $42.00'
                },
                {
                    nameProduct: 'Perfect Macarons',
                    img: 'img/perfect-macarons-200x255.jpg',
                    price: '$18.00 - $52.00'
                }
            ]
        }
    }
}
</script>

<template>

    <!-- Sezione ListProducts -->
    <section>

        <div class="container">
            <!-- Contenuto con testo -->
            <div class="text-content">
                <!-- Titolo -->
                <h2>
                    Find a freshly baked product perfect for you
                </h2>

                <!-- Paragrafo -->
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quas nihil odio, temporibus non,
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>

                <!-- Bottone -->
                <a href="#" class="btn violet">
                    Shop All Products
                </a>
            </div>

            <!-- Inizio card prodotti -->
            <div class="product" v-for="(product, index) in products" :key="index">

                <!-- Immagine prodotto -->
                <div class="product-img">
                    <img :src="product.img" :alt="product.nameProduct">

                    <!-- Freccia sinistra -->
                    <a href="#" class="left-arrow" v-if="index === 0">
                        <font-awesome-icon icon="fa-solid fa-angle-left" />
                    </a>

                    <!-- Freccia destra -->
                    <a href="#" class="right-arrow" v-if="index === 3">
                        <font-awesome-icon icon="fa-solid fa-angle-right" />
                    </a>
                </div>

                <!-- Info prodotto -->
                <div class="info-product">
                    <!-- Titoli -->
                    <h3>
                        {{ product.nameProduct }}
                    </h3>
                    <h4>
                        {{ product.price }}
                    </h4>
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
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    text-align: center;

    .text-content {
        text-align: center;

        p {
            font-size: 0.7rem;
            color: $text-color;
            line-height: 20px;
        }
    }

    .product {

        .product-img {
            position: relative;

            img {
                width: 100%;
                height: 100%;
            }

            .left-arrow,
            .right-arrow {
                font-size: 0.6rem;
            }
        }

        .info-product {
            color: $dark-violet-color;
            padding-top: 10px;

            h3 {
                font-family: $font-family-lora;
            }

            h4 {
                font-size: 0.8rem;
                font-weight: normal;
                padding-top: 10px;
            }
        }
    }

    .text-content,
    .product {
        width: 20%;
    }
}
</style>
