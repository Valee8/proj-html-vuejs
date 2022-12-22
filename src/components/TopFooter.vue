<script>

import AppNav from '../components/AppNav.vue'


import { store } from '../store.js';


export default {
    name: "TopFooter",
    components: {
        AppNav
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>

    <div class="top-footer">

        <!-- Navbar -->
        <div class="nav">
            <AppNav />
        </div>

        <!-- Parte newsletter -->
        <div class="newsletter">
            <!-- Titolo -->
            <h4>
                Subscribe to our Newsletter
            </h4>

            <!-- Input search e bottone -->
            <input type="search" placeholder="Enter email address*" class="btn white">
            <button class="btn violet">Subscribe</button>
        </div>

    </div>

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

.top-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        cursor: pointer;
    }

    .btn {
        border: 1px solid #eeeeef;
        padding: 12px 25px;

        &.violet {
            &:hover {
                background-color: $dark-violet-color;
                color: $white-color;
            }
        }

        &.white {
            margin-right: 10px;
            width: 280px;

            &:hover {
                background-color: $white-color;
            }
        }
    }

    h4 {
        font-family: $font-family-lora;
        color: $dark-violet-color;
        text-align: right;
        padding-bottom: 30px;
    }
}
</style>
