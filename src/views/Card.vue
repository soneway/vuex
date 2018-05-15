<template>
  <div class="view card">
    <PiCard :dataList="dataList">
    </PiCard>
  </div>
</template>

<style lang="scss">
  .card {
    height: 100%;
    overflow: hidden;
  }
</style>

<script>
  import PiCard from '../components/PiCard.vue';

  export default {
    components: {
      PiCard,
    },
    data() {
      return {
        dataList: [
          'https://soneway.github.io/jq/example/dist/img/1.jpg',
          'https://soneway.github.io/jq/example/dist/img/2.jpg',
          'https://soneway.github.io/jq/example/dist/img/3.jpg',
          'https://soneway.github.io/jq/example/dist/img/4.jpg',
          'https://soneway.github.io/jq/example/dist/img/5.jpg',
        ],
      };
    },
    mounted() {

    },
    methods: {},
  };
</script>
