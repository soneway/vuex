<template>
    <div class="view carousel">
        <PiCarousel ref="carousel"
            :dataList="dataList">
        </PiCarousel>
    </div>
</template>

<style lang="scss">
    .carousel {
        height: 100%;
    }
</style>

<script>
  import PiCarousel from '../component/PiCarousel.vue';
  import request from '../script/request';

  export default {
    components: {
      PiCarousel,
    },
    data() {
      return {
        dataList: [],
      };
    },
    mounted() {
      this.initImgs();
      this.initEvent();
    },
    methods: {
      async initImgs() {
        const imgs = await request.getImgs();
        if (!imgs) {
          return console.log('网络请求失败');
        }
        this.dataList = imgs;
      },
      initEvent() {
        this.$refs.carousel.$on('slide', async (index, direction) => {
          if (index === this.dataList.length - 1 && direction === -1) {
            const imgs = await request.getImgs();
            imgs && this.dataList.push(...imgs);
          }
        });
      },
    },
  };
</script>
