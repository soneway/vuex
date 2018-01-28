<template>
    <div class="body index">
        <Header></Header>
        <div class="main">
            <transition name="fade">
                <router-view />
            </transition>
        </div>
    </div>
</template>

<style lang="scss">
    @import "./style/common";

    .body.index {
        display: flex;
        flex-direction: column;
        height: 100vh;

        .main {
            flex: 1;
            z-index: 0;
            position: relative;

            .view {
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
            }
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }

    .fade-enter, .fade-leave-to
    {
        opacity: 0;
    }
</style>

<script>
  import Header from './components/common/Header.vue';

  export default {
    components: {
      Header,
    },
  };
</script>
