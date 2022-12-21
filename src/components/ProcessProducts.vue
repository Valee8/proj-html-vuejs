<script>

export default {
    name: "Ingredients",
    data() {
        return {
            cardsIngredient: [
                {
                    text1: 'Tell us what you have in mind',
                    text2: 'Manual Ingredients selection',
                    text3: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi incidunt iure sed, facilis, ipsum necessitatibus blanditiis, quibusdam architecto aperiam assumenda doloribus porro velit fugit reprehenderit molestias voluptate a veritatis. Fugiat?'
                },
                {
                    text1: 'We Start Baking',
                    text2: 'Sweet & Delicious',
                    text3: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi incidunt iure sed, facilis, ipsum necessitatibus blanditiis, quibusdam architecto aperiam assumenda doloribus porro velit fugit reprehenderit molestias voluptate a veritatis. Fugiat?'
                },
                {
                    text1: 'Dont just take our word for it',
                    text2: 'Finally found an alternative to the mass produced products. Something that incorporates real organic ingredients, nutrient dense wellness while promoting sustainability and activity',
                    text3: 'Rachel Cooper, Founder'
                },
                {
                    text1: 'Delivered to your home',
                    text2: 'Baked to order & Gift Wrapped',
                    text3: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi incidunt iure sed, facilis, ipsum necessitatibus blanditiis, quibusdam architecto aperiam assumenda doloribus porro velit fugit reprehenderit molestias voluptate a veritatis. Fugiat?'
                }
            ]
        }
    }
}
</script>

<template>

    <section>

        <div class="container">

            <div v-for="(infoIngredients, index) in cardsIngredient" :key="index" :class="'card n-' + index">

                <div class="number" v-if="index != 3">
                    0{{ index + 1 }}
                </div>

                <div class="number" v-else>
                    0{{ index }}
                </div>

                <h1 v-if="index != 2">
                    {{ infoIngredients.text1 }}
                </h1>

                <h5 v-else>
                    {{ infoIngredients.text1 }}
                </h5>

                <h5 v-if="index != 2">
                    {{ infoIngredients.text2 }}
                </h5>

                <p v-else>
                    {{ infoIngredients.text2 }}
                </p>

                <p v-if="index != 2">
                    {{ infoIngredients.text3 }}
                </p>

                <h5 v-else>
                    {{ infoIngredients.text3 }}
                </h5>
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
        color: #000;
        min-height: 400px;
        background-size: cover;
        width: 100%;
    }

    .card.n-1,
    .card.n-2 {
        width: 50%;
    }

    .card.n-2 .number {
        display: none;
    }

    .card.n-0 {
        background-image: url('/img/bakery-process-1.jpg');
        filter: brightness(70%);
    }

    .card.n-1 {
        background-image: url('/img/bakery-process-2.jpg');
    }

    .card.n-2 {
        background-color: #f2eef4;
    }

    .card.n-3 {
        background-image: url('/img/bakery-process-3.jpg');
    }
}
</style>
