<script>

export default {
    name: "OrderProducts",
}
</script>

<template>

    <section>
        <div class="container-small">
            <div class="text-content">
                <h5>
                    Try our seasonal products
                </h5>

                <h1>
                    Order for pick-up or delivery to your home
                </h1>

                <a href="#" class="btn white">
                    Shop Now
                </a>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

section {
    background-image: url('img/call-to-action-bg.jpg');
    background-size: cover;
    margin: 60px 0;

    .container-small {
        color: $white-color;
        padding: 20px 0;

        h5 {
            color: #929295;
        }

        h1 {
            color: $white-color;
            width: 620px;
            padding-bottom: 70px;
        }

        .btn {
            padding: 11px 30px;
            font-weight: bold;
            font-size: 0.8rem;
        }
    }
}
</style>
