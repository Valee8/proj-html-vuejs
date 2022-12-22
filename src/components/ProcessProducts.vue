<script>

export default {
    name: "Ingredients",
}
</script>

<template>

    <section>

        <div class="container">

            <div class="card one">

                <div class="brightness">
                    <div class="number">
                        01
                    </div>

                    <h1>
                        Tell us what you have in mind
                    </h1>

                    <div class="text-card">
                        <h5>
                            Manual Ingredients selection
                        </h5>

                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi incidunt iure sed, facilis,
                            ipsum
                            necessitatibus blanditiis, quibusdam architecto aperiam assumenda doloribus porro velit
                            fugit
                            reprehenderit molestias voluptate a veritatis. Fugiat?
                        </p>
                    </div>
                </div>
            </div>

            <div class="card two">

                <div class="brightness">
                    <div class="number">
                        02
                    </div>

                    <h1>
                        We Start Baking
                    </h1>

                    <div class="text-card">
                        <h5>
                            Sweet & Delicious
                        </h5>

                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi incidunt iure sed, facilis,
                            ipsum
                            necessitatibus blanditiis, quibusdam architecto aperiam assumenda doloribus porro velit
                            fugit
                            reprehenderit molestias voluptate a veritatis. Fugiat?
                        </p>
                    </div>
                </div>
            </div>

            <div class="card three">
                <h5>
                    Dont just take our word for it
                </h5>

                <h1>
                    &ldquo;Finally found an alternative to the mass produced products. Something that incorporates real
                    organic
                    ingredients, nutrient dense wellness while promoting sustainability and activity.&rdquo;
                </h1>

                <h5>
                    Rachel Cooper, Founder
                </h5>
            </div>

            <div class="card four">

                <div class="brightness">
                    <div class="number">
                        03
                    </div>

                    <h1>
                        Delivered to your home
                    </h1>

                    <div class="text-card">
                        <h5>
                            Baked to order & Gift Wrapped
                        </h5>

                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi incidunt iure sed, facilis,
                            ipsum
                            necessitatibus blanditiis, quibusdam architecto aperiam assumenda doloribus porro velit
                            fugit
                            reprehenderit molestias voluptate a veritatis. Fugiat?
                        </p>
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
    flex-wrap: wrap;

    .card {
        background-size: cover;
        width: 100%;
        position: relative;

        &.one {
            .text-card {
                padding-top: 80px;
                float: right;
                width: 420px;

            }
        }

        &.three {
            padding: 60px;

            h1 {
                color: $dark-violet-color;
            }

            h5 {
                color: $text-color;
                padding: 20px 0;
            }
        }

        .brightness {
            background-color: rgba(0, 0, 0, 0.4);
            height: 100%;
            padding: 60px;
        }

        &:not(.three) {
            h1 {
                color: $white-color;
                width: 500px;
            }

            h5 {
                color: rgba(255, 255, 255, 0.6);
            }

            p {
                color: $white-color;
                font-size: 0.8rem;
                line-height: 23px;
                padding: 15px 0;
            }
        }

        &.two,
        &.three {
            width: 50%;
        }

        &.one {
            background-image: url('/img/bakery-process-1.jpg');
        }

        &.two {
            background-image: url('/img/bakery-process-2.jpg');
        }

        &.three {
            background-color: #f2eef4;
        }

        &.four {
            background-image: url('/img/bakery-process-3.jpg');
        }
    }








}
</style>
