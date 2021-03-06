<template>
  <div class="pi-slider"
    :class="_class"
    :style="_style"
    @touchstart="__touchstart"
    @touchmove="__touchmove"
    @touchend="__touchend">

    <!--滚动容器-->
    <div class="pi-wrap"
      :style="_wrapStyle"
      @click="__wrapClick">
      <slot :self="this" />
    </div>
    <!--滚动容器 end-->

    <!--页脚-->
    <div class="pi-pager"
      v-if="isShowPager">
      <slot name="pager" :self="this">
                <span v-for="(_, index) in items"
                  @click="__pagerClick(index)"
                  :class="{selected: index === currentIndex}"></span>
      </slot>
    </div>
    <!--页脚 end-->
  </div>
</template>

<style lang="scss">
  @import "../style/lib/loading";

  .pi-slider {
    overflow: hidden;
    position: relative;
    /*优化滚动效果*/
    backface-visibility: hidden;

    /*没有动画*/
    &.notrans {
      .pi-wrap {
        transition: none;
      }
    }
    /*loading*/
    &.pi-loading {
      .pi-wrap > * {
        @extend .loading;
      }
    }
    /*水平方向*/
    &.horizontal {
      .pi-wrap {
        height: 100%;
        flex-direction: row;

        & > * {
          height: 100%;
        }
      }
    }

    .pi-wrap {
      width: 100%;
      transition: transform ease;
      display: flex;
      flex-direction: column;

      & > * {
        display: block;
        flex: 1;
        overflow: hidden;
        position: relative;
      }
    }

    .pi-pager {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      text-align: center;
      font-size: 0;
      line-height: 20px;

      & > span {
        border: 3px solid #bbb;
        border-radius: 50%;
        margin: 0 2px;

        &.selected {
          border-color: #555;
        }
      }
    }
  }
</style>

<script>
  export default {
    props: {
      // 宽度
      width: {
        default: '100%',
      },
      // 高度
      height: {
        default: '100%',
      },
      // 是否水平方向滚动
      isHorizontal: {
        default: false,
      },
      // 滑动距离阈值
      swipSpanThreshold: {
        default: 6,
      },
      // 滑动阈值
      swipThreshold: {
        default: 50,
      },
      // 动画时长
      duration: {
        default: 400,
      },
      // first和last拉不动的比率
      pullRatio: {
        default: 2,
      },
      // 默认滚动索引
      index: {
        default: 0,
      },
      // 是否显示页脚
      isShowPager: {
        default: true,
      },
      // 是否显示loading
      isShowLoading: {
        default: true,
      },
      // 自动播放间隔
      autoPlayTimeout: {
        // 默认为0,表示禁用自动播放
        default: 0,
      },
    },
    data() {
      return {
        // 禁用动画
        notrans: false,
        // 滑动距离
        swipSpan: 0,
        // 滚动索引
        currentIndex: this.index,
        // translate
        currentTranslate: 0,
      };
    },
    computed: {
      items() {
        return this.$slots.default.filter((item) => item.tag);
      },
      _class() {
        return {
          notrans: this.notrans,
          'pi-loading': this.isShowLoading,
          horizontal: this.isHorizontal,
        };
      },
      _style() {
        return {
          width: this.width,
          height: this.height,
        };
      },
      _wrapStyle() {
        const {currentTranslate, currentIndex, isHorizontal, $el, items} = this;
        let {swipSpan} = this;
        const itemCount = items.length;

        let translate;
        // touchmove跟手指滚动
        if (swipSpan) {
          // 起点或者终点
          if (currentIndex === 0 && swipSpan > 0 || currentIndex === itemCount - 1 && swipSpan < 0) {
            // 模拟拉不动的操作体验
            swipSpan /= this.pullRatio;
          }
          translate = currentTranslate + swipSpan;
        }
        // touchend时滚动动画
        else if ($el) {
          // 计算出滑动值
          const itemSpan = isHorizontal ? $el.offsetWidth : $el.offsetHeight;
          translate = this.currentTranslate = -currentIndex * itemSpan;

          // items的状态
          items.forEach((item, index) => {
            const itemEl = item.elm;
            index === currentIndex ? itemEl.setAttribute('current', '') : itemEl.removeAttribute('current');
          });
        }

        // 样式对象
        const style = {
          transform: `translate3d(${isHorizontal ? `${translate}px,0,0` : `0,${translate}px,0`})`,
          transitionDuration: `${this.duration / 1000}s`,
        };

        // 容器的高度或宽度
        const size = `${itemCount * 100}%`;
        // 水平方向
        if (isHorizontal) {
          style.width = size;
        }
        // 竖直方向
        else {
          style.height = size;
        }

        return style;
      },
    },
    mounted() {
      // 初始化slots
      this.initSlots();
      // 初始化timer
      this.startInter();
    },
    methods: {
      // 初始化slots
      initSlots() {
        const {$el, currentIndex} = this;

        // 遍历
        this.items.forEach((item, index) => {
          const itemEl = item.elm;

          // current状态
          index === currentIndex && (itemEl.setAttribute('current', ''));

          // 计算出初始滑动值
          if (currentIndex > 0) {
            const itemSpan = this.isHorizontal ? $el.offsetWidth : $el.offsetHeight;
            this.currentTranslate = -currentIndex * itemSpan;
          }
        });
      },
      __touchstart(evt) {
        const touch = evt.targetTouches ? evt.targetTouches[0] : evt;

        // 记录触摸开始位置
        this.startX = touch.pageX;
        this.startY = touch.pageY;

        // 重置swipSpan
        this.swipSpan = 0;
        // 重置手指拖拽移动
        this.isMoving = false;
        // 禁用动画
        this.notrans = true;

        // 停止定时器
        this.stopInter();
      },
      __touchmove(evt) {
        const touch = evt.targetTouches ? evt.targetTouches[0] : evt;
        // x轴滑动距离
        const swipSpanX = touch.pageX - this.startX;
        const absX = Math.abs(swipSpanX);
        // y轴滑动距离
        const swipSpanY = touch.pageY - this.startY;
        const absY = Math.abs(swipSpanY);

        // 左右
        if (this.isHorizontal) {
          // x轴滑动距离大于y轴 y轴滑动距离小于阈值,说明的确是左右滑动
          if (this.isMoving || absY < absX || absY < this.swipSpanThreshold) {
            evt.preventDefault();
            evt.stopPropagation();
            this.swipSpan = swipSpanX;
            // 已经满足滚动条件,且正在手指拖动
            this.isMoving = true;
          }
        }
        // 上下
        else {
          // y轴滑动距离大于x轴 x轴滑动距离小于阈值,说明的确是上下滑动
          if (this.isMoving || absX < absY || absX < this.swipSpanThreshold) {
            evt.preventDefault();
            evt.stopPropagation();
            this.swipSpan = swipSpanY;
            // 已经满足滚动条件,且正在手指拖动
            this.isMoving = true;
          }
        }
      },
      __touchend() {
        const {swipSpan, swipThreshold, items, currentIndex} = this;
        const itemCount = items.length;

        // 向右,下
        if (swipSpan > swipThreshold) {
          // 非起点
          if (currentIndex !== 0) {
            --this.currentIndex;
          }
        }
        // 向左,上
        else if (swipSpan < -swipThreshold) {
          // 非终点
          if (currentIndex !== itemCount - 1) {
            ++this.currentIndex;
          }
        }

        // 加上动画
        this.notrans = false;
        // 重置swipSpan
        this.swipSpan = 0;

        // 开始定时器
        this.startInter();
      },
      __pagerClick(index) {
        this.slideToIndex(index);
      },
      __wrapClick() {
        this.$emit('click', this.currentIndex);
      },

      // 滑动到第几帧
      slideToIndex(index) {
        // index不符合条件
        if (typeof index !== 'number' || index < 0 || index >= this.items.length) {
          return;
        }
        this.currentIndex = index;
      },
      // 开始定时器
      startInter() {
        const {autoPlayTimeout} = this;
        const itemCount = this.items.length;

        // 自动播放开启
        if (autoPlayTimeout) {
          this.inter = setInterval(() => {
            // 最后一帧
            if (this.currentIndex === itemCount - 1) {
              this.currentIndex = 0;
            }
            else {
              ++this.currentIndex;
            }
          }, autoPlayTimeout);
        }
      },
      // 停止定定时器
      stopInter() {
        clearInterval(this.inter);
      },
    },
  };
</script>
