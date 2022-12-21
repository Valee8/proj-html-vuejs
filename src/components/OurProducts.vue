<script>

export default {
    name: "OurProducts",
}
</script>

<template>

    <section id="our-products">

        <div class="container">
            <div class="text-content">
                <div class="mini-title">
                    Our Products
                </div>

                <h2>
                    All our delectable pastries are backed fresh in our Kitchen very morning, and are made with
                    all-natural,
                    all
                    organic ingredients
                </h2>

                <a href="#" class="btn violet">
                    Start Shopping
                </a>
            </div>

            <div class="img-content">
                <img src="/img/choco-chip-cookies-400x510.jpg" alt="Choco Chip Cookies">
                <img src="/img/strawberry-jam-cookies-400x510.jpg" alt="Straberry Jam Cookies">

                <a href="#" class="left-arrow">
                    <font-awesome-icon icon="fa-solid fa-angle-left" />
                </a>

                <a href="#" class="right-arrow">
                    <font-awesome-icon icon="fa-solid fa-angle-right" />
                </a>
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
        width: 30%;
    }

    .img-content {
        position: relative;

        img {
            margin: 0 8px;
            vertical-align: middle;
        }

        .left-arrow {
            left: 8px;
        }

        .right-arrow {
            right: 8px;
        }

        .left-arrow,
        .right-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: #a691b2;
            padding: 22px 11px;
            color: $white-color;
            font-size: 0.9rem;

            a {
                color: #e9dedc;
            }
        }
    }
}
</style>
