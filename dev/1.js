webpackJsonp([1],{

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(86)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(60),
  /* template */
  __webpack_require__(78),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/soneway/Sites/github/vuex/src/views/Slider.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Slider.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-48a87da8", Component.options)
  } else {
    hotAPI.reload("data-v-48a87da8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    // 宽度
    width: {
      default: '100%'
    },
    // 高度
    height: {
      default: '100%'
    },
    // 是否水平方向滚动
    isHorizontal: {
      default: false
    },
    // 滑动距离阈值
    swipSpanThreshold: {
      default: 6
    },
    // 滑动阈值
    swipThreshold: {
      default: 50
    },
    // 动画时长
    duration: {
      default: 400
    },
    // first和last拉不动的比率
    pullRatio: {
      default: 2
    },
    // 默认滚动索引
    index: {
      default: 0
    },
    // 是否显示页脚
    isShowPager: {
      default: true
    },
    // 是否显示loading
    isShowLoading: {
      default: true
    },
    // 自动播放间隔
    autoPlayTimeout: {
      // 默认为0,表示禁用自动播放
      default: 0
    }
  },
  data: function data() {
    return {
      // 禁用动画
      notrans: false,
      // 滑动距离
      swipSpan: 0,
      // 滚动索引
      currentIndex: this.index,
      // translate
      currentTranslate: 0
    };
  },

  computed: {
    items: function items() {
      return this.$slots.default.filter(function (item) {
        return item.tag;
      });
    },
    _class: function _class() {
      return {
        notrans: this.notrans,
        'pi-loading': this.isShowLoading,
        horizontal: this.isHorizontal
      };
    },
    _style: function _style() {
      return {
        width: this.width,
        height: this.height
      };
    },
    _wrapStyle: function _wrapStyle() {
      var currentTranslate = this.currentTranslate,
          currentIndex = this.currentIndex,
          isHorizontal = this.isHorizontal,
          $el = this.$el,
          items = this.items;
      var swipSpan = this.swipSpan;

      var itemCount = items.length;

      var translate = void 0;
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
          var itemSpan = isHorizontal ? $el.offsetWidth : $el.offsetHeight;
          translate = this.currentTranslate = -currentIndex * itemSpan;

          // items的状态
          items.forEach(function (item, index) {
            var itemEl = item.elm;
            index === currentIndex ? itemEl.setAttribute('current', '') : itemEl.removeAttribute('current');
          });
        }

      // 样式对象
      var style = {
        transform: 'translate3d(' + (isHorizontal ? translate + 'px,0,0' : '0,' + translate + 'px,0') + ')',
        transitionDuration: this.duration / 1000 + 's'
      };

      // 容器的高度或宽度
      var size = itemCount * 100 + '%';
      // 水平方向
      if (isHorizontal) {
        style.width = size;
      }
      // 竖直方向
      else {
          style.height = size;
        }

      return style;
    }
  },
  mounted: function mounted() {
    // 初始化slots
    this.initSlots();
    // 初始化timer
    this.startInter();
  },

  methods: {
    // 初始化slots
    initSlots: function initSlots() {
      var _this = this;

      var $el = this.$el,
          currentIndex = this.currentIndex;

      // 遍历

      this.items.forEach(function (item, index) {
        var itemEl = item.elm;

        // current状态
        index === currentIndex && itemEl.setAttribute('current', '');

        // 计算出初始滑动值
        if (currentIndex > 0) {
          var itemSpan = _this.isHorizontal ? $el.offsetWidth : $el.offsetHeight;
          _this.currentTranslate = -currentIndex * itemSpan;
        }
      });
    },
    __touchstart: function __touchstart(evt) {
      var touch = evt.targetTouches ? evt.targetTouches[0] : evt;

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
    __touchmove: function __touchmove(evt) {
      var touch = evt.targetTouches ? evt.targetTouches[0] : evt;
      // x轴滑动距离
      var swipSpanX = touch.pageX - this.startX;
      var absX = Math.abs(swipSpanX);
      // y轴滑动距离
      var swipSpanY = touch.pageY - this.startY;
      var absY = Math.abs(swipSpanY);

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
    __touchend: function __touchend() {
      var swipSpan = this.swipSpan,
          swipThreshold = this.swipThreshold,
          items = this.items,
          currentIndex = this.currentIndex;

      var itemCount = items.length;

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
    __pagerClick: function __pagerClick(index) {
      this.slideToIndex(index);
    },
    __wrapClick: function __wrapClick() {
      this.$emit('click', this.currentIndex);
    },


    // 滑动到第几帧
    slideToIndex: function slideToIndex(index) {
      // index不符合条件
      if (typeof index !== 'number' || index < 0 || index >= this.items.length) {
        return;
      }
      this.currentIndex = index;
    },

    // 开始定时器
    startInter: function startInter() {
      var _this2 = this;

      var autoPlayTimeout = this.autoPlayTimeout;

      var itemCount = this.items.length;

      // 自动播放开启
      if (autoPlayTimeout) {
        this.inter = setInterval(function () {
          // 最后一帧
          if (_this2.currentIndex === itemCount - 1) {
            _this2.currentIndex = 0;
          } else {
            ++_this2.currentIndex;
          }
        }, autoPlayTimeout);
      }
    },

    // 停止定定时器
    stopInter: function stopInter() {
      clearInterval(this.inter);
    }
  }
};

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PiSlider = __webpack_require__(72);

var _PiSlider2 = _interopRequireDefault(_PiSlider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    PiSlider: _PiSlider2.default
  },
  mounted: function mounted() {},

  methods: {}
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n/*loading样式*/\n.loading:before, .pi-slider.pi-loading .pi-wrap > :before {\n  content: '';\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 40px;\n  height: 40px;\n  margin-left: -20px;\n  margin-top: -20px;\n  border-radius: 40px;\n  /*如.loading元素中还有transform,:before内容将挡不住*/\n  z-index: -1;\n  /*圆环用border生成*/\n  border: 3px solid rgba(136, 136, 136, 0.2);\n  border-left: 3px solid #888888;\n  /*动画*/\n  -webkit-animation: ani_circle 0.8s linear infinite;\n          animation: ani_circle 0.8s linear infinite;\n}\n\n/*旋转动画*/\n@-webkit-keyframes ani_circle {\n0% {\n    -webkit-transform: rotateZ(0deg);\n            transform: rotateZ(0deg);\n}\n100% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg);\n}\n}\n@keyframes ani_circle {\n0% {\n    -webkit-transform: rotateZ(0deg);\n            transform: rotateZ(0deg);\n}\n100% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg);\n}\n}\n.pi-slider {\n  overflow: hidden;\n  position: relative;\n  /*优化滚动效果*/\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  /*没有动画*/\n  /*loading*/\n  /*水平方向*/\n}\n.pi-slider.notrans .pi-wrap {\n    -webkit-transition: none;\n    transition: none;\n}\n.pi-slider.horizontal .pi-wrap {\n    height: 100%;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n            flex-direction: row;\n}\n.pi-slider.horizontal .pi-wrap > * {\n      height: 100%;\n}\n.pi-slider .pi-wrap {\n    width: 100%;\n    -webkit-transition: -webkit-transform ease;\n    transition: -webkit-transform ease;\n    transition: transform ease;\n    transition: transform ease, -webkit-transform ease;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n            flex-direction: column;\n}\n.pi-slider .pi-wrap > * {\n      display: block;\n      -webkit-box-flex: 1;\n      -webkit-flex: 1;\n              flex: 1;\n      overflow: hidden;\n      position: relative;\n}\n.pi-slider .pi-pager {\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    text-align: center;\n    font-size: 0;\n    line-height: 20px;\n}\n.pi-slider .pi-pager > span {\n      border: 3px solid #bbb;\n      border-radius: 50%;\n      margin: 0 2px;\n}\n.pi-slider .pi-pager > span.selected {\n        border-color: #555;\n}\n", "", {"version":3,"sources":["/./src/components/PiSlider.vue"],"names":[],"mappings":";AAAA,iBAAiB;AACjB,aAAa;AACb;EACE,YAAY;EACZ,mBAAmB;EACnB,UAAU;EACV,SAAS;EACT,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,oBAAoB;EACpB,yCAAyC;EACzC,YAAY;EACZ,eAAe;EACf,2CAA2C;EAC3C,+BAA+B;EAC/B,MAAM;EACN,mDAA2C;UAA3C,2CAA2C;CAAE;;AAE/C,QAAQ;AACR;AACE;IACE,iCAAyB;YAAzB,yBAAyB;CAAE;AAC7B;IACE,mCAA2B;YAA3B,2BAA2B;CAAE;CAAE;AAJnC;AACE;IACE,iCAAyB;YAAzB,yBAAyB;CAAE;AAC7B;IACE,mCAA2B;YAA3B,2BAA2B;CAAE;CAAE;AAEnC;EACE,iBAAiB;EACjB,mBAAmB;EACnB,UAAU;EACV,oCAA4B;UAA5B,4BAA4B;EAC5B,QAAQ;EACR,WAAW;EACX,QAAQ;CAAE;AACV;IACE,yBAAiB;IAAjB,iBAAiB;CAAE;AACrB;IACE,aAAa;IACb,+BAAoB;IAApB,8BAAoB;IAApB,4BAAoB;YAApB,oBAAoB;CAAE;AACtB;MACE,aAAa;CAAE;AACnB;IACE,YAAY;IACZ,2CAA2B;IAA3B,mCAA2B;IAA3B,2BAA2B;IAA3B,mDAA2B;IAC3B,qBAAc;IAAd,sBAAc;IAAd,cAAc;IACd,6BAAuB;IAAvB,8BAAuB;IAAvB,+BAAuB;YAAvB,uBAAuB;CAAE;AACzB;MACE,eAAe;MACf,oBAAQ;MAAR,gBAAQ;cAAR,QAAQ;MACR,iBAAiB;MACjB,mBAAmB;CAAE;AACzB;IACE,mBAAmB;IACnB,QAAQ;IACR,SAAS;IACT,UAAU;IACV,mBAAmB;IACnB,aAAa;IACb,kBAAkB;CAAE;AACpB;MACE,uBAAuB;MACvB,mBAAmB;MACnB,cAAc;CAAE;AAChB;QACE,mBAAmB;CAAE","file":"PiSlider.vue","sourcesContent":["@charset \"UTF-8\";\n/*loading样式*/\n.loading:before, .pi-slider.pi-loading .pi-wrap > :before {\n  content: '';\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 40px;\n  height: 40px;\n  margin-left: -20px;\n  margin-top: -20px;\n  border-radius: 40px;\n  /*如.loading元素中还有transform,:before内容将挡不住*/\n  z-index: -1;\n  /*圆环用border生成*/\n  border: 3px solid rgba(136, 136, 136, 0.2);\n  border-left: 3px solid #888888;\n  /*动画*/\n  animation: ani_circle 0.8s linear infinite; }\n\n/*旋转动画*/\n@keyframes ani_circle {\n  0% {\n    transform: rotateZ(0deg); }\n  100% {\n    transform: rotateZ(360deg); } }\n\n.pi-slider {\n  overflow: hidden;\n  position: relative;\n  /*优化滚动效果*/\n  backface-visibility: hidden;\n  /*没有动画*/\n  /*loading*/\n  /*水平方向*/ }\n  .pi-slider.notrans .pi-wrap {\n    transition: none; }\n  .pi-slider.horizontal .pi-wrap {\n    height: 100%;\n    flex-direction: row; }\n    .pi-slider.horizontal .pi-wrap > * {\n      height: 100%; }\n  .pi-slider .pi-wrap {\n    width: 100%;\n    transition: transform ease;\n    display: flex;\n    flex-direction: column; }\n    .pi-slider .pi-wrap > * {\n      display: block;\n      flex: 1;\n      overflow: hidden;\n      position: relative; }\n  .pi-slider .pi-pager {\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    text-align: center;\n    font-size: 0;\n    line-height: 20px; }\n    .pi-slider .pi-pager > span {\n      border: 3px solid #bbb;\n      border-radius: 50%;\n      margin: 0 2px; }\n      .pi-slider .pi-pager > span.selected {\n        border-color: #555; }\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n.slider {\n  height: 100%;\n}\n.slider .img {\n    background: center center no-repeat;\n    background-size: contain;\n}\n", "", {"version":3,"sources":["/./src/views/Slider.vue"],"names":[],"mappings":";AAAA;EACE,aAAa;CAAE;AACf;IACE,oCAAoC;IACpC,yBAAyB;CAAE","file":"Slider.vue","sourcesContent":[".slider {\n  height: 100%; }\n  .slider .img {\n    background: center center no-repeat;\n    background-size: contain; }\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(83)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(56),
  /* template */
  __webpack_require__(75),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/soneway/Sites/github/vuex/src/components/PiSlider.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PiSlider.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1c3c7439", Component.options)
  } else {
    hotAPI.reload("data-v-1c3c7439", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pi-slider",
    class: _vm._class,
    style: (_vm._style),
    on: {
      "touchstart": _vm.__touchstart,
      "touchmove": _vm.__touchmove,
      "touchend": _vm.__touchend
    }
  }, [_c('div', {
    staticClass: "pi-wrap",
    style: (_vm._wrapStyle),
    on: {
      "click": _vm.__wrapClick
    }
  }, [_vm._t("default", null, {
    self: this
  })], 2), _vm._v(" "), (_vm.isShowPager) ? _c('div', {
    staticClass: "pi-pager"
  }, [_vm._t("pager", _vm._l((_vm.items), function(_, index) {
    return _c('span', {
      class: {
        selected: index === _vm.currentIndex
      },
      on: {
        "click": function($event) {
          _vm.__pagerClick(index)
        }
      }
    })
  }), {
    self: this
  })], 2) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1c3c7439", module.exports)
  }
}

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "view slider"
  }, [_c('PiSlider', {
    ref: "slider",
    attrs: {
      "isHorizontal": true,
      "autoPlayTimeout": 0,
      "index": 0,
      "isShowPager": true
    },
    scopedSlots: _vm._u([{
      key: "pager",
      fn: function(props) {
        return _vm._l((props.self.items), function(_, index) {
          return _c('span', {
            class: {
              selected: index === props.self.currentIndex
            }
          })
        })
      }
    }])
  }, [_c('div', {
    staticClass: "img",
    staticStyle: {
      "background-image": "url(https://soneway.github.io/jq/example/dist/img/1.jpg)"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "img",
    staticStyle: {
      "background-image": "url(https://soneway.github.io/jq/example/dist/img/2.jpg)"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "img",
    staticStyle: {
      "background-image": "url(https://soneway.github.io/jq/example/dist/img/3.jpg)"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "img",
    staticStyle: {
      "background-image": "url(https://soneway.github.io/jq/example/dist/img/4.jpg)"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "img",
    staticStyle: {
      "background-image": "url(https://soneway.github.io/jq/example/dist/img/5.jpg)"
    }
  })])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-48a87da8", module.exports)
  }
}

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(63);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("755fac6c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1c3c7439\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PiSlider.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1c3c7439\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PiSlider.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(66);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("3a02be0e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-48a87da8\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Slider.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-48a87da8\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Slider.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=1.js.map