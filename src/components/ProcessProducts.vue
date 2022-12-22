<script>

export default {
    name: "Ingredients",
}
</script>

<template>

    <!-- Sezione Process Products -->
    <section>

        <div class="container">

            <!-- Prima card -->
            <div class="card one">

                <div class="brightness">

                    <!-- Numero sulla destra -->
                    <div class="number">
                        01
                    </div>

                    <!-- Titolo -->
                    <h1>
                        Tell us what you have in mind
                    </h1>

                    <!-- Testo -->
                    <div class="text-card">
                        <!-- Titolo secondario -->
                        <h5>
                            Manual Ingredients selection
                        </h5>

                        <!-- Paragrafo -->
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

            <!-- Seconda card sulla sinistra -->
            <div class="card two">

                <div class="brightness">

                    <!-- Numero sulla destra -->
                    <div class="number">
                        02
                    </div>

                    <!-- Titolo -->
                    <h1>
                        We Start Baking
                    </h1>

                    <!-- Testo -->
                    <div class="text-card">

                        <!-- Titolo secondario -->
                        <h5>
                            Sweet & Delicious
                        </h5>

                        <!-- Paragrafo -->
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

            <!-- Terza card sulla destra -->
            <div class="card three">
                <!-- Titolo secondario -->
                <h5>
                    Dont just take our word for it
                </h5>

                <!-- Titolo -->
                <h1>
                    &ldquo;Finally found an alternative to the mass produced products. Something that incorporates real
                    organic
                    ingredients, nutrient dense wellness while promoting sustainability and activity.&rdquo;
                </h1>

                <!-- Titolo secondario -->
                <h5>
                    Rachel Cooper, Founder
                </h5>
            </div>

            <!-- Quarta card -->
            <div class="card four">

                <div class="brightness">
                    <!-- Numero sulla destra -->
                    <div class="number">
                        03
                    </div>

                    <!-- Titolo -->
                    <h1>
                        Delivered to your home
                    </h1>

                    <!-- Testo -->
                    <div class="text-card">
                        <!-- Titolo secondario -->
                        <h5>
                            Baked to order & Gift Wrapped
                        </h5>

                        <!-- Paragrafo -->
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

section {
    padding: 80px 0;


    .container {
        display: flex;
        flex-wrap: wrap;

        .card {
            background-size: cover;
            width: 100%;
            position: relative;
            margin: 15px 0;

            .number {
                position: absolute;
                right: 45px;
                top: 35px;
                color: $white-color;
                font-size: 4rem;
            }

            &.one {
                min-height: 500px;
                background-image: url('/img/bakery-process-1.jpg');

                .brightness {

                    &::after {
                        content: "";
                        clear: both;
                        display: table;
                    }
                }

                .text-card {
                    padding-top: 170px;
                    float: right;
                    width: 420px;

                }
            }

            &.two {
                background-image: url('/img/bakery-process-2.jpg');
                margin-right: 15px;

                .brightness {
                    display: flex;
                    flex-direction: column;

                    h1,
                    p {
                        width: 300px;
                    }

                    h1 {
                        flex-grow: 1
                    }
                }

            }

            &.three {
                background-color: #f2eef4;
                padding: 80px 75px;
                margin-left: 15px;

                h1 {
                    color: $dark-violet-color;
                    font-size: 2.2rem;
                }

                h5 {
                    color: $text-color;
                    padding: 20px 0;
                    font-size: 0.7rem;

                    &:last-of-type {
                        text-transform: none;
                    }
                }
            }

            .brightness {
                background-color: rgba(0, 0, 0, 0.4);
                height: 100%;
                padding: 40px 60px;

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
            }

            &.two,
            &.three {
                width: calc(50% - 15px);
            }

            &.four {
                min-height: 500px;
                background-image: url('/img/bakery-process-3.jpg');

                .brightness {
                    display: flex;
                    flex-direction: column;

                    h1 {
                        flex-grow: 1;
                    }

                    h5,
                    p {
                        width: 400px;
                    }
                }
            }
        }
    }
}
</style>
