<template>
  <div class="view carousel">
    <PiCarousel ref="carousel"
      :dataList="images">
    </PiCarousel>
  </div>
</template>

<style lang="scss">
  .carousel {
    height: 100%;
  }
</style>

<script>
  import { mapState, mapActions } from 'vuex';
  import PiCarousel from '../components/PiCarousel.vue';

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
    computed: {
      ...mapState([
        'images',
      ]),
    },
    methods: {
      ...mapActions([
        'getImages',
      ]),
      initImgs() {
        this.getImages();
      },
      initEvent() {
        this.$refs.carousel.$on('slide', (index, direction) => {
          if (index === this.images.length - 1 && direction === -1) {
            this.getImages();
          }
        });
      },
    },
  };
</script>
