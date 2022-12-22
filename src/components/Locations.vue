<script>

export default {
    name: "Locations",
}
</script>

<template>

    <section>

        <div class="container">

            <div class="text-content">
                <h5>
                    Locations
                </h5>

                <h2>
                    Visit our Bakeries
                </h2>
            </div>

            <div class="locations">
                <div class="location new-york">

                    <img src="/img/new-york-bk.jpg" alt="New York Bakerie">

                    <h2>
                        New York

                    </h2>

                    <div class="info-location">
                        <div class="info">
                            <h5>
                                Call us
                            </h5>
                            <div class="telephone">
                                1.800.458.556
                            </div>
                        </div>

                        <div class="info">
                            <h5>
                                Open All Week
                            </h5>
                            <div class="time">
                                9:00 AM - 6:00 PM
                            </div>
                        </div>

                        <div class="info">
                            <a href="#" class="btn white">
                                View Map
                            </a>
                        </div>
                    </div>

                </div>

                <div class="location london">

                    <img src="/img/london-bk.jpg" alt="London Bakerie">

                    <h2>
                        London
                    </h2>

                    <div class="info-location">
                        <div class="info">
                            <h5>
                                Call us
                            </h5>
                            <div class="telephone">
                                1.800.458.556
                            </div>
                        </div>

                        <div class="info">
                            <h5>
                                Open All Week
                            </h5>
                            <div class="time">
                                9:00 AM - 6:00 PM
                            </div>
                        </div>
                        <div class="info">
                            <a href="#" class="btn white">
                                View Map
                            </a>
                        </div>
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
    text-align: center;

    h5 {
        color: $text-color;
    }

    .locations {
        display: flex;
        color: $text-color;
        padding-top: 20px;

        h2 {
            color: $dark-violet-color;
            padding: 20px 0;
        }

        h5 {
            padding-bottom: 5px;
        }

        .new-york {
            background-color: #f1f9fb;
        }

        .london {
            background-color: #faf3e3;
        }

        .info-location {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            font-size: 0.6rem;
            padding: 15px 0;

            .info {
                width: calc(100% / 3);

                .telephone,
                .time {
                    font-size: 0.7rem;
                }
            }
        }
    }
}
</style>
