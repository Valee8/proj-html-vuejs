<script>

export default {
    name: "Sharing",
}
</script>

<template>

    <section>

        <div class="container">

            <div class="top-section">
                <img src="/img/social-1.jpg" alt="Social 1">

                <div class="follow-us">

                    <div class="content">
                        <h5>
                            Made for sharing
                        </h5>

                        <h2>
                            Let's stay in touch
                        </h2>

                        <a href="#" class="btn violet">
                            <font-awesome-icon icon="fa-brands fa-instagram" class="instagram" /> Follow us
                        </a>
                    </div>

                </div>

                <img src="/img/social-2.jpg" alt="Social 2">


            </div>

            <div class="bottom-section">

                <img src="/img/social-3.jpg" alt="Social 3">

                <img src="/img/social-4.jpg" alt="Social 4">

                <img src="/img/social-5.jpg" alt="Social 5">

                <img src="/img/social-6.jpg" alt="Social 6">

            </div>



        </div>

    </section>

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

.container {
    text-align: center;

    .top-section {
        display: flex;
        justify-content: space-between;

        .follow-us {
            background-color: #f2eef4;
            width: 50%;
            margin: 10px 16px 10px 17px;
            position: relative;

            .content {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);

                h2 {
                    padding-bottom: 30px;

                }

                .instagram {
                    padding-right: 6px;
                }
            }
        }

        img {
            width: calc(25% - 20px);
            margin: 10px;

            &:first-child {
                margin-left: 0;
            }

            &:last-child {
                margin-right: 0;
            }
        }
    }

    .bottom-section {
        display: flex;
        justify-content: space-between;

        img {
            width: calc(100% / 4 - 20px);
            margin: 10px;

            &:first-child {
                margin-left: 0;
            }

            &:last-child {
                margin-right: 0;
            }
        }
    }
}
</style>
