<template>
  <div class="pi-confirm"
    :class="_class">
    <div class="pi-box"
      :style="_boxStyle">
      <h3 class="pi-title" v-html="title"></h3>
      <p class="pi-msg" v-html="msg"></p>
      <div class="pi-btn-wrap">
        <a class="pi-btn-cancel"
          @click="__btnCancelClick">{{btnCancelText}}</a>
        <a class="pi-btn-ok"
          @click="__btnOkClick">{{btnOkText}}</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .pi-confirm {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    /*垂直居中*/
    align-items: center;
    /*水平居中*/
    justify-content: center;
    background: rgba(#000, 0.3);
    /*动画*/
    transition: all 0.3s ease;
    visibility: hidden;
    opacity: 0;

    /*显示*/
    &.visible {
      visibility: visible;
      z-index: 999;
      opacity: 1;

      .pi-box {
        transform: none;
      }
    }

    .pi-box {
      background: rgba(#fff, 0.8);
      text-align: center;
      border-radius: 0.8em;
      overflow: hidden;
      /*动画*/
      transition: transform 0.3s ease;
      transform: scale3d(1.2, 1.2, 1);
    }

    .pi-title {
      line-height: 250%;
      background: rgba(#fff, 0.3);
      box-shadow: 0 0 20px rgba(#000, 0.03);
      font-size: 1.2em;
    }

    .pi-msg {
      padding: 1.5em 3em;
      line-height: 120%;
    }

    .pi-btn-wrap {
      line-height: 280%;
      box-shadow: 0 0 1px rgba(#000, 0.2);
      color: #08f;
      font-size: 1.15em;
      display: flex;
      overflow: hidden;

      & > a {
        flex: 1;

        &:active {
          background: rgba(#000, 0.04);
        }

        /*间隔线*/
        &:not(:first-of-type) {
          box-shadow: 0 0 1px rgba(#000, 0.2);
        }
      }
    }

    .pi-btn-ok {
      font-weight: bold;
    }
  }
</style>

<script>
  export default {
    props: {
      // 宽度
      width: {
        default: '280px',
      },
      // 标题
      title: {
        default: '提示',
      },
      // 确定按钮文案
      btnOkText: {
        default: '确定',
      },
      // 确定按钮点击事件
      btnOkClick: {
        default: null,
      },
      // 取消按钮文案
      btnCancelText: {
        default: '取消',
      },
      // 取消按钮点击事件
      btnCancelClick: {
        default: null,
      },
      // 是否添加到全局变量
      isGlobal: {
        default: false,
      },
    },
    data() {
      return {
        msg: '',
        visible: false,
      };
    },
    computed: {
      _class() {
        return {
          visible: this.visible,
        };
      },
      _boxStyle() {
        return {
          width: this.width,
        };
      },
    },
    created() {
      // 初始配置
      this.defaults = Object.assign({}, this._props);
      this.isGlobal && (window.confirm = this.show);
    },
    methods: {
      show(opts) {
        // 配置项
        typeof opts === 'object' || (opts = {msg: opts});
        // 配置项合并
        Object.assign(this, this.defaults, opts);
        // 显示
        this.visible = true;
      },
      __btnOkClick() {
        this.visible = false;
        const {btnOkClick} = this;
        typeof btnOkClick === 'function' && btnOkClick();
      },
      __btnCancelClick() {
        this.visible = false;
        const {btnCancelClick} = this;
        typeof btnCancelClick === 'function' && btnCancelClick();
      },
    },
  };
</script>
