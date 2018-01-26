<template>
    <div class="body index">
        <Header></Header>
        <div class="main">
            <router-view />
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
        }
    }
</style>

<script>
  import Header from './component/common/Header.vue';

  export default {
    components: {
      Header,
    },
  };
</script>
