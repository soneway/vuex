<template>
    <header class="header">
        <nav class="nav">
            <router-link to="card">card</router-link>
            <router-link to="carousel">carousel</router-link>
            <router-link to="msgbox">msgbox</router-link>
            <router-link to="slider">slider</router-link>
            <router-link to="uc-gallery">uc-gallery</router-link>
        </nav>
    </header>
</template>

<style lang="scss">
    .header {
        .nav {
            height:40px;
            line-height: 40px;
            overflow-y: hidden;
            overflow-x: auto;
            box-shadow: 0 1px 3px rgba(#000, 0.3);
            z-index: 1;
            white-space: nowrap;
            position: relative;

            & > a {
                display: inline-block;
                padding: 0 10px;

                &.router-link-active {
                    box-shadow: 0 -2px 0 0 #09f inset;
                }
            }
        }
    }
</style>

<script>
  export default {};
</script>
