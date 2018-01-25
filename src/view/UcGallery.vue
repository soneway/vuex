<template>
    <div class="wrapper">

        <!--焦点图容器-->
        <div class="carouselWrap">
            <pi-carousel ref="carousel"
                :isShowPager="false"
                :isLoop="false"
                :dataList="dataList">
                <template scope="props">
                    <div class="imgWrap">
                        <img class="img" :src="props.itemData.img" />
                        <div class="imgInfo">
                            <p class="indicator">
                                <span>{{props.index + 1}}</span>/{{dataList.length}}
                            </p>
                            <p class="title">{{titleInfo.title}}</p>
                            <p class="subTitle">
                                <span class="source">{{titleInfo.source}}</span><span class="time">{{titleInfo.time}}</span>
                            </p>
                            <p class="desc">{{props.itemData.desc}}</p>
                        </div>
                    </div>
                </template>
            </pi-carousel>
        </div>
        <!--焦点图容器 end-->

        <!--缩略图-->
        <div class="thumbWrap" ref="thumbWrap">
            <div class="thumb" v-for="(item, index) in dataList"
                :class="{selected: index === thumbIndex}"
                :style="{backgroundImage: `url(${item.img})`}"
                @click="__thumbClick(index)">
            </div>
        </div>
        <!--缩略图 end-->
    </div>
</template>

<style lang="scss">
    @import "../style/common";

    /*缩略图高度*/
    $thumbHeight: 42px;

    /*焦点图*/
    .carouselWrap {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: $thumbHeight;

        // 复写loading的top位置
        .pi-carousel.pi-loading .pi-item:before {
            top: 100px;
        }
    }

    .imgWrap {
        $padding: 15px;
        width: 100%;
        height: 100%;
        overflow: auto;
        font-size: 15px;
        color: #999;
        line-height: 150%;
        background-image: linear-gradient(to bottom, rgba(#000, 0.05) 61%, #fff 0%);

        .img {
            display: block;
            max-width: 100%;
            max-height: 60%;
            min-height: 200px;
            margin: 0 auto;
        }

        .imgInfo {
            padding: $padding;
            background: #fff;
            min-height: 40%;
        }

        /*页码指示*/
        .indicator {
            font-weight: 100;

            span {
                font-size: 30px;
                color: #333;
            }
        }

        /*标题*/
        .title {
            font-size: 20px;
            padding: $padding 0;
            color: #333;
        }

        /*来源和日期*/
        .subTitle {
            $color: #bbb;
            color: $color;
            font-size: 14px;
            line-height: 100%;

            & > span {
                display: inline-block;

                &:not(:first-of-type) {
                    border-left: 1px solid $color;
                    margin-left: 12px;
                    padding: 0 12px;
                }
            }
        }

        /*描述信息*/
        .desc {
            padding-top: $padding;
            text-indent: 2em;
        }
    }

    /*缩略图*/
    .thumbWrap {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: $thumbHeight;
        white-space: nowrap;
        overflow-y: hidden;
        overflow-x: auto;
    }

    .thumb {
        width: 60px;
        height: 100%;
        background: center center;
        background-size: cover;
        display: inline-block;
        &:not(:last-of-type) {
            border-left: 1px solid #fff;
        }
        &.selected {
            border: 2px solid #06f;

            & + .thumb {
                border: none;
            }
        }
    }
</style>

<script>
  import PiCarousel from '../component/PiCarousel.vue';

  export default {
    components: {
      PiCarousel,
    },
    created() {
      const dataList = [{ 'img': 'http://m.k618.cn/uctp/201703/W020170309517271350068.jpg', 'desc': '美国时间11月8日上午，美国大选投票在纽约州如火如荼地进行，特朗普夫妇和克林顿夫妇分别在纽约曼哈顿和查帕克进行了投票。特朗普夫妇前往川普大楼附近的曼哈顿投票处投票，不过由于曼哈顿是民主党优势地区，特朗普夫妇并没有受到热烈欢迎，甚至被喝了倒彩。希拉里夫妇在查帕克投票处则受到了支持者欢迎，在投票后与支持者拥抱握手。图 英国每日邮报' }, { 'img': 'http://m.k618.cn/uctp/201703/W020170309517280709840.jpg', 'desc': '美国时间11月8日上午，美国大选投票在纽约州如火如荼地进行，特朗普夫妇和克林顿夫妇分别在纽约曼哈顿和查帕克进行了投票。特朗普夫妇前往川普大楼附近的曼哈顿投票处投票，不过由于曼哈顿是民主党优势地区，特朗普夫妇并没有受到热烈欢迎，甚至被喝了倒彩。希拉里夫妇在查帕克投票处则受到了支持者欢迎，在投票后与支持者拥抱握手。图 英国每日邮报' }, { 'img': 'http://m.k618.cn/uctp/201703/W020170309517297138416.jpg', 'desc': '美国时间11月8日上午，美国大选投票在纽约州如火如荼地进行，特朗普夫妇和克林顿夫妇分别在纽约曼哈顿和查帕克进行了投票。特朗普夫妇前往川普大楼附近的曼哈顿投票处投票，不过由于曼哈顿是民主党优势地区，特朗普夫妇并没有受到热烈欢迎，甚至被喝了倒彩。希拉里夫妇在查帕克投票处则受到了支持者欢迎，在投票后与支持者拥抱握手。图 英国每日邮报' }, { 'img': 'http://m.k618.cn/uctp/201703/W020170309517288414818.jpg', 'desc': '美国时间11月8日上午，美国大选投票在纽约州如火如荼地进行，特朗普夫妇和克林顿夫妇分别在纽约曼哈顿和查帕克进行了投票。特朗普夫妇前往川普大楼附近的曼哈顿投票处投票，不过由于曼哈顿是民主党优势地区，特朗普夫妇并没有受到热烈欢迎，甚至被喝了倒彩。希拉里夫妇在查帕克投票处则受到了支持者欢迎，在投票后与支持者拥抱握手。图 英国每日邮报' }, { 'img': 'http://picture.youth.cn/qtdb/201611/W020161109281829963355.jpg', 'desc': '美国时间11月8日上午，美国大选投票在纽约州如火如荼地进行，特朗普夫妇和克林顿夫妇分别在纽约曼哈顿和查帕克进行了投票。特朗普夫妇前往川普大楼附近的曼哈顿投票处投票，不过由于曼哈顿是民主党优势地区，特朗普夫妇并没有受到热烈欢迎，甚至被喝了倒彩。希拉里夫妇在查帕克投票处则受到了支持者欢迎，在投票后与支持者拥抱握手。图 英国每日邮报' }, { 'img': 'http://picture.youth.cn/qtdb/201611/W020161109281830257742.jpg', 'desc': '特朗普填写选票。美国时间11月8日上午，美国大选投票在纽约州如火如荼地进行，特朗普夫妇和克林顿夫妇分别在纽约曼哈顿和查帕克进行了投票。特朗普夫妇前往川普大楼附近的曼哈顿投票处投票，不过由于曼哈顿是民主党优势地区，特朗普夫妇并没有受到热烈欢迎，甚至被喝了倒彩。希拉里夫妇在查帕克投票处则受到了支持者欢迎，在投票后与支持者拥抱握手。图 英国每日邮报' }, { 'img': 'http://picture.youth.cn/qtdb/201611/W020161109281831576714.jpg', 'desc': '特朗普和妻子在纽约投票。' }, { 'img': 'http://picture.youth.cn/qtdb/201611/W020161109281832198313.jpg', 'desc': '特朗普和妻子在纽约投票。美国时间11月8日上午，美国大选投票在纽约州如火如荼地进行，特朗普夫妇和克林顿夫妇分别在纽约曼哈顿和查帕克进行了投票。特朗普夫妇前往川普大楼附近的曼哈顿投票处投票，不过由于曼哈顿是民主党优势地区，特朗普夫妇并没有受到热烈欢迎，甚至被喝了倒彩。希拉里夫妇在查帕克投票处则受到了支持者欢迎，在投票后与支持者拥抱握手。图 英国每日邮报' }, { 'img': 'http://picture.youth.cn/qtdb/201611/W020161109281837479067.jpg', 'desc': '投票时特朗普看向妻子的选票美国时间11月8日上午，美国大选投票在纽约州如火如荼地进行，特朗普夫妇和克林顿夫妇分别在纽约曼哈顿和查帕克进行了投票。特朗普夫妇前往川普大楼附近的曼哈顿投票处投票，不过由于曼哈顿是民主党优势地区，特朗普夫妇并没有受到热烈欢迎，甚至被喝了倒彩。希拉里夫妇在查帕克投票处则受到了支持者欢迎，在投票后与支持者拥抱握手。图 英国每日邮报' }, { 'img': 'http://picture.youth.cn/qtdb/201611/W020161109281837723654.jpg', 'desc': '巧合的是，特朗普的儿子艾瑞克投票时也看向妻子的选择，可谓子如其父。' }, { 'img': 'http://picture.youth.cn/qtdb/201611/W020161109281838046113.jpg', 'desc': '小女儿贴好选举日贴纸后，特朗普携妻女合影。' }, { 'img': 'http://picture.youth.cn/qtdb/201611/W020161109281838253245.jpg', 'desc': '纽约时间早上8点，希拉里与克林顿一起前往查帕克投票点投票。' }, { 'img': 'http://picture.youth.cn/qtdb/201611/W020161109281838409257.jpg', 'desc': '投票后她与支持者拥抱和握手，得到支持者喝彩。' }, { 'img': 'http://picture.youth.cn/qtdb/201611/W020161109281839310496.jpg', 'desc': '克林顿带着眼镜看选票，希拉里在他右侧弯腰填写选票。' }, { 'img': 'http://picture.youth.cn/qtdb/201611/W020161109281880358681.jpg', 'desc': '希拉里弯腰填写选票。' }, { 'img': 'http://picture.youth.cn/qtdb/201611/W020161109281881050299.jpg', 'desc': '希拉里的女儿在投票日前夜参加希拉里拉票活动后回到纽约。' }];
      const titleInfo = { 'title': '组图：黄埔滩头探访海军战舰云集的广州造船厂', 'source': '河南商报', 'time': '04-22 11:24' };

      // 将data中的数据覆盖
      Object.assign(this, {
        dataList,
        titleInfo,
      });
    },
    data() {
      return {
        thumbIndex: 0,
        dataList: [],
        titleInfo: {},
      };
    },
    mounted() {
      // carousel插件滚动事件
      this.$refs.carousel.$on('slide', (index) => {
        this.thumbSlide(index);
      });
    },
    methods: {
      // 缩略图滚动
      thumbSlide(index) {
        if (index === this.thumbIndex) {
          return;
        }
        this.thumbIndex = index;
        this.$refs.carousel.slideToIndex(index);
        this.center(index);
      },
      __thumbClick(index) {
        this.thumbSlide(index);
      },
      // 缩略图居中
      center(index) {
        const { thumbWrap } = this.$refs;
        const thumbEl = document.querySelector(`.thumb:nth-of-type(${index + 1})`);
        thumbWrap.scrollLeft = thumbEl.offsetLeft - (thumbWrap.offsetWidth - thumbEl.offsetWidth) / 2;
      },
    },
  };
</script>
