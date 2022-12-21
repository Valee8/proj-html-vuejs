<script>

export default {
    name: "OurProducts",
}
</script>

<template>

    <section>

        <div class="container">
            <div class="text-content">
                <h5>
                    Our Products
                </h5>

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

                <a href="#" class="left-arrow">
                    <font-awesome-icon icon="fa-solid fa-angle-left" />
                </a>
            </div>
            <div class="img-content">
                <img src="/img/strawberry-jam-cookies-400x510.jpg" alt="Straberry Jam Cookies">

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

        img {
            vertical-align: middle;
            width: 100%;
        }

        .left-arrow {
            left: 0;
        }

        .right-arrow {
            right: 0;
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
