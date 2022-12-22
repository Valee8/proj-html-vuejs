<script>


export default {
    name: "AppJumbotron",
}
</script>

<template>

    <div class="jumbotron">

        <div class="container">
            <div class="text-content">
                <h5>
                    Fresh &amp; Tasty Bakery Everyday
                </h5>

                <h1>
                    The Perfect Fresh Bread
                </h1>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita veniam illum corrupti commodi iste
                    asperiores Lorem ipsum dolor sit amet consectetur.
                </p>

                <a href="#" class="btn white">
                    Explore our products
                </a>

            </div>

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
    position: relative;

    .header-icons {
        list-style-type: none;
        position: absolute;
        right: 13px;
        top: 40px;
        text-align: center;

        li {
            background-color: $white-color;
            margin: 5px 0;
            border-radius: 3px;
            padding: 7px 4px;
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
</style>
