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
        max-width: 1379px;
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

        display: flex;

        padding-top: 4px;
        padding-left: 8px;
        padding-right: 8px;
        padding-bottom: 4px;
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

    .header-content .btn-map .map-icon {
        margin-right: 8px;
    }

    .header-content .btn-map div {
        color: white;
    }

    @media (max-width: 1438px) {
        .header-wrapper {
            justify-content: start;
        }   

        .header-wrapper .header-content {
            margin-left: 32px;
            margin-right: 32px;
        }
    }
</style>

<template>
    <div class="header-wrapper">
        <div class="header-content">
            <a href="https://minecis.net" class="title">
                MINECRAFT СНГ
            </a>
            <a class="btn-map" href="https://map.minecis.net/">
                <img class="map-icon" src="./assets/Map.svg">
                <div>Карта</div>
            </a>
        </div>
    </div>
</template>