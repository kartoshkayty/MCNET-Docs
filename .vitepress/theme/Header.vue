<style>
    .header-wrapper {
        background: #0A0A0A;
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100vw;
        height: 65px;
        z-index: 999;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .header-content {
        max-width: 1601px;
        width: 100%;
        box-sizing: border-box;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .header-content .title {
        font-family: "Unbounded";
        font-weight: 500;
        font-size: 24px;
        color: white;
    }

    .header-content .btn-map {
        background-color: transparent;
        padding-top: 7px;
        padding-left: 36px;
        padding-right: 37px;
        padding-bottom: 7px;
        font-family: "Inter";
        font-weight: 700;
        font-size: 15px;

        border-radius: 10px;

        transition-duration: 250ms;
        transition-property: background-color;
        transition-timing-function: ease-out;
    }

    .header-content .btn-map:hover {
        background-color: #40923C;
    }
</style>

<template>
    <div class="header-wrapper">
        <div class="header-content">
            <a href="https://minecis.net" class="title">
                MINECRAFT СНГ
            </a>
            <a class="btn-map" href="https://map.minecis.net/">
                Карта
            </a>
        </div>
    </div>
</template>

<script setup>

</script>