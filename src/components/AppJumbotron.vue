<script>


export default {
    name: "AppJumbotron",
}
</script>

<template>

    <div class="jumbotron">

        <div class="container">
            <!-- Contenuto jumbotron -->
            <div class="text-content">
                <!-- Titoli -->
                <h5>
                    Fresh &amp; Tasty Bakery Everyday
                </h5>

                <h1>
                    The Perfect Fresh Bread
                </h1>

                <!-- Paragrafo -->
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita veniam illum corrupti commodi iste
                    asperiores Lorem ipsum dolor sit amet consectetur.
                </p>

                <!-- Bottone -->
                <a href="#" class="btn white">
                    Explore our products
                </a>

            </div>

            <!-- Icone in alto a destra -->
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
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;



.jumbotron {
    width: 100%;
    min-height: 600px;
    padding-top: 120px;
    margin-bottom: 80px;

    .container {

        position: relative;


        .header-icons {
            list-style-type: none;
            position: absolute;
            text-align: center;
            right: 13px;
            top: 40px;

            li {
                background-color: $white-color;
                margin: 5px 0;
                border-radius: 3px;
                padding: 5px;
                font-weight: bold;
                box-shadow: 0 0 20px rgba(0, 0, 0, .2);

                a {
                    color: #33475b;
                }


                .number {
                    color: #65bc7b;
                    font-size: 1.2rem;

                    sup {
                        font-size: 0.8rem;
                        letter-spacing: -2px;
                    }
                }

                .text-icon {
                    font-size: 0.6rem;
                    color: $text-color;
                }
            }
        }

        .text-content {
            width: 350px;
            color: $text-color;

            h1 {
                color: $dark-violet-color;
            }

            p {
                font-size: 0.8rem;
                line-height: 20px;
            }

        }
    }
}
</style>
