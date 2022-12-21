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

    <section>

        <div class="container">
            <div class="text-content">
                <h2>
                    Find a freshly baked product perfect for you
                </h2>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quas nihil odio, temporibus non,
                </p>

                <a href="#" class="btn violet">
                    Shop All Products
                </a>
            </div>

            <div class="products">
                <div class="card" v-for="(product, index) in products" :key="index">
                    <img :src="product.img" :alt="product.nameProduct">
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

    .text-content {
        width: 25%;
        text-align: center;
    }

    .products {
        display: flex;
        text-align: center;
    }
}
</style>
