webpackJsonp([2],{

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(85)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(61),
  /* template */
  __webpack_require__(77),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/soneway/Sites/github/vuex/src/views/UcGallery.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UcGallery.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-422c4669", Component.options)
  } else {
    hotAPI.reload("data-v-422c4669", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PiCarousel = __webpack_require__(13);

var _PiCarousel2 = _interopRequireDefault(_PiCarousel);

var _data = __webpack_require__(90);

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  components: {
    PiCarousel: _PiCarousel2.default
  },
  created: function created() {
    // 将data中的数据覆盖
    Object.assign(this, _data2.default);
  },
  data: function data() {
    return {
      thumbIndex: 0,
      dataList: [],
      titleInfo: {}
    };
  },
  mounted: function mounted() {
    var _this = this;

    // carousel插件滚动事件
    this.$refs.carousel.$on('slide', function (index) {
      _this.thumbSlide(index);
    });
  },

  methods: {
    // 缩略图滚动
    thumbSlide: function thumbSlide(index) {
      if (index === this.thumbIndex) {
        return;
      }
      this.thumbIndex = index;
      this.$refs.carousel.slideToIndex(index);
      this.center(index);
    },
    __thumbClick: function __thumbClick(index) {
      this.thumbSlide(index);
    },

    // 缩略图居中
    center: function center(index) {
      var thumbWrap = this.$refs.thumbWrap;

      var thumbEl = document.querySelector('.thumb:nth-of-type(' + (index + 1) + ')');
      thumbWrap.scrollLeft = thumbEl.offsetLeft - (thumbWrap.offsetWidth - thumbEl.offsetWidth) / 2;
    }
  }
};

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n.uc-gallery {\n  height: 100%;\n  position: relative;\n  /*缩略图高度*/\n  /*焦点图*/\n  /*缩略图*/\n}\n.uc-gallery .carouselWrap {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 42px;\n}\n.uc-gallery .carouselWrap .pi-carousel.pi-loading .pi-item:before {\n      top: 100px;\n}\n.uc-gallery .imgWrap {\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    font-size: 15px;\n    color: #999;\n    line-height: 150%;\n    background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05) 61%, #fff 0%);\n    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 61%, #fff 0%);\n    /*页码指示*/\n    /*标题*/\n    /*来源和日期*/\n    /*描述信息*/\n}\n.uc-gallery .imgWrap .img {\n      display: block;\n      max-width: 100%;\n      max-height: 60%;\n      min-height: 200px;\n      margin: 0 auto;\n}\n.uc-gallery .imgWrap .imgInfo {\n      padding: 15px;\n      background: #fff;\n      min-height: 40%;\n}\n.uc-gallery .imgWrap .indicator {\n      font-weight: 100;\n}\n.uc-gallery .imgWrap .indicator span {\n        font-size: 30px;\n        color: #333;\n}\n.uc-gallery .imgWrap .title {\n      font-size: 20px;\n      padding: 15px 0;\n      color: #333;\n}\n.uc-gallery .imgWrap .subTitle {\n      color: #bbb;\n      font-size: 14px;\n      line-height: 100%;\n}\n.uc-gallery .imgWrap .subTitle > span {\n        display: inline-block;\n}\n.uc-gallery .imgWrap .subTitle > span:not(:first-of-type) {\n          border-left: 1px solid #bbb;\n          margin-left: 12px;\n          padding: 0 12px;\n}\n.uc-gallery .imgWrap .desc {\n      padding-top: 15px;\n      text-indent: 2em;\n}\n.uc-gallery .thumbWrap {\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    height: 42px;\n    white-space: nowrap;\n    overflow-y: hidden;\n    overflow-x: auto;\n}\n.uc-gallery .thumb {\n    width: 60px;\n    height: 100%;\n    background: center center;\n    background-size: cover;\n    display: inline-block;\n}\n.uc-gallery .thumb:not(:last-of-type) {\n      border-left: 1px solid #fff;\n}\n.uc-gallery .thumb.selected {\n      border: 2px solid #06f;\n}\n.uc-gallery .thumb.selected + .thumb {\n        border: none;\n}\n", "", {"version":3,"sources":["/./src/views/UcGallery.vue"],"names":[],"mappings":";AAAA,iBAAiB;AACjB;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,OAAO;EACP,OAAO;CAAE;AACT;IACE,mBAAmB;IACnB,QAAQ;IACR,SAAS;IACT,OAAO;IACP,aAAa;CAAE;AACf;MACE,WAAW;CAAE;AACjB;IACE,YAAY;IACZ,aAAa;IACb,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,iFAA+E;IAA/E,+EAA+E;IAC/E,QAAQ;IACR,MAAM;IACN,SAAS;IACT,QAAQ;CAAE;AACV;MACE,eAAe;MACf,gBAAgB;MAChB,gBAAgB;MAChB,kBAAkB;MAClB,eAAe;CAAE;AACnB;MACE,cAAc;MACd,iBAAiB;MACjB,gBAAgB;CAAE;AACpB;MACE,iBAAiB;CAAE;AACnB;QACE,gBAAgB;QAChB,YAAY;CAAE;AAClB;MACE,gBAAgB;MAChB,gBAAgB;MAChB,YAAY;CAAE;AAChB;MACE,YAAY;MACZ,gBAAgB;MAChB,kBAAkB;CAAE;AACpB;QACE,sBAAsB;CAAE;AACxB;UACE,4BAA4B;UAC5B,kBAAkB;UAClB,gBAAgB;CAAE;AACxB;MACE,kBAAkB;MAClB,iBAAiB;CAAE;AACvB;IACE,mBAAmB;IACnB,QAAQ;IACR,SAAS;IACT,UAAU;IACV,aAAa;IACb,oBAAoB;IACpB,mBAAmB;IACnB,iBAAiB;CAAE;AACrB;IACE,YAAY;IACZ,aAAa;IACb,0BAA0B;IAC1B,uBAAuB;IACvB,sBAAsB;CAAE;AACxB;MACE,4BAA4B;CAAE;AAChC;MACE,uBAAuB;CAAE;AACzB;QACE,aAAa;CAAE","file":"UcGallery.vue","sourcesContent":["@charset \"UTF-8\";\n.uc-gallery {\n  height: 100%;\n  position: relative;\n  /*缩略图高度*/\n  /*焦点图*/\n  /*缩略图*/ }\n  .uc-gallery .carouselWrap {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 42px; }\n    .uc-gallery .carouselWrap .pi-carousel.pi-loading .pi-item:before {\n      top: 100px; }\n  .uc-gallery .imgWrap {\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    font-size: 15px;\n    color: #999;\n    line-height: 150%;\n    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 61%, #fff 0%);\n    /*页码指示*/\n    /*标题*/\n    /*来源和日期*/\n    /*描述信息*/ }\n    .uc-gallery .imgWrap .img {\n      display: block;\n      max-width: 100%;\n      max-height: 60%;\n      min-height: 200px;\n      margin: 0 auto; }\n    .uc-gallery .imgWrap .imgInfo {\n      padding: 15px;\n      background: #fff;\n      min-height: 40%; }\n    .uc-gallery .imgWrap .indicator {\n      font-weight: 100; }\n      .uc-gallery .imgWrap .indicator span {\n        font-size: 30px;\n        color: #333; }\n    .uc-gallery .imgWrap .title {\n      font-size: 20px;\n      padding: 15px 0;\n      color: #333; }\n    .uc-gallery .imgWrap .subTitle {\n      color: #bbb;\n      font-size: 14px;\n      line-height: 100%; }\n      .uc-gallery .imgWrap .subTitle > span {\n        display: inline-block; }\n        .uc-gallery .imgWrap .subTitle > span:not(:first-of-type) {\n          border-left: 1px solid #bbb;\n          margin-left: 12px;\n          padding: 0 12px; }\n    .uc-gallery .imgWrap .desc {\n      padding-top: 15px;\n      text-indent: 2em; }\n  .uc-gallery .thumbWrap {\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    height: 42px;\n    white-space: nowrap;\n    overflow-y: hidden;\n    overflow-x: auto; }\n  .uc-gallery .thumb {\n    width: 60px;\n    height: 100%;\n    background: center center;\n    background-size: cover;\n    display: inline-block; }\n    .uc-gallery .thumb:not(:last-of-type) {\n      border-left: 1px solid #fff; }\n    .uc-gallery .thumb.selected {\n      border: 2px solid #06f; }\n      .uc-gallery .thumb.selected + .thumb {\n        border: none; }\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "view uc-gallery"
  }, [_c('div', {
    staticClass: "carouselWrap"
  }, [_c('PiCarousel', {
    ref: "carousel",
    attrs: {
      "isShowPager": false,
      "isLoop": false,
      "dataList": _vm.dataList
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(props) {
        return [_c('div', {
          staticClass: "imgWrap"
        }, [_c('img', {
          staticClass: "img",
          attrs: {
            "src": props.itemData.img
          }
        }), _vm._v(" "), _c('div', {
          staticClass: "imgInfo"
        }, [_c('p', {
          staticClass: "indicator"
        }, [_c('span', [_vm._v(_vm._s(props.index + 1))]), _vm._v("/" + _vm._s(_vm.dataList.length) + "\n                        ")]), _vm._v(" "), _c('p', {
          staticClass: "title"
        }, [_vm._v(_vm._s(_vm.titleInfo.title))]), _vm._v(" "), _c('p', {
          staticClass: "subTitle"
        }, [_c('span', {
          staticClass: "source"
        }, [_vm._v(_vm._s(_vm.titleInfo.source))]), _c('span', {
          staticClass: "time"
        }, [_vm._v(_vm._s(_vm.titleInfo.time))])]), _vm._v(" "), _c('p', {
          staticClass: "desc"
        }, [_vm._v(_vm._s(props.itemData.desc))])])])]
      }
    }])
  })], 1), _vm._v(" "), _c('div', {
    ref: "thumbWrap",
    staticClass: "thumbWrap"
  }, _vm._l((_vm.dataList), function(item, index) {
    return _c('div', {
      staticClass: "thumb",
      class: {
        selected: index === _vm.thumbIndex
      },
      style: ({
        backgroundImage: ("url(" + (item.img) + ")")
      }),
      on: {
        "click": function($event) {
          _vm.__thumbClick(index)
        }
      }
    })
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-422c4669", module.exports)
  }
}

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(65);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("3a822cbf", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-422c4669\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UcGallery.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-422c4669\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UcGallery.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 90:
/***/ (function(module, exports) {

module.exports = {"dataList":[{"img":"http://m.k618.cn/uctp/201703/W020170309517271350068.jpg","desc":"美国时间11月8日上午，美国大选投票在纽约州如火如荼地进行，特朗普夫妇和克林顿夫妇分别在纽约曼哈顿和查帕克进行了投票。特朗普夫妇前往川普大楼附近的曼哈顿投票处投票，不过由于曼哈顿是民主党优势地区，特朗普夫妇并没有受到热烈欢迎，甚至被喝了倒彩。希拉里夫妇在查帕克投票处则受到了支持者欢迎，在投票后与支持者拥抱握手。图 英国每日邮报"},{"img":"http://m.k618.cn/uctp/201703/W020170309517280709840.jpg","desc":"美国时间11月8日上午，美国大选投票在纽约州如火如荼地进行，特朗普夫妇和克林顿夫妇分别在纽约曼哈顿和查帕克进行了投票。特朗普夫妇前往川普大楼附近的曼哈顿投票处投票，不过由于曼哈顿是民主党优势地区，特朗普夫妇并没有受到热烈欢迎，甚至被喝了倒彩。希拉里夫妇在查帕克投票处则受到了支持者欢迎，在投票后与支持者拥抱握手。图 英国每日邮报"},{"img":"http://m.k618.cn/uctp/201703/W020170309517297138416.jpg","desc":"美国时间11月8日上午，美国大选投票在纽约州如火如荼地进行，特朗普夫妇和克林顿夫妇分别在纽约曼哈顿和查帕克进行了投票。特朗普夫妇前往川普大楼附近的曼哈顿投票处投票，不过由于曼哈顿是民主党优势地区，特朗普夫妇并没有受到热烈欢迎，甚至被喝了倒彩。希拉里夫妇在查帕克投票处则受到了支持者欢迎，在投票后与支持者拥抱握手。图 英国每日邮报"},{"img":"http://m.k618.cn/uctp/201703/W020170309517288414818.jpg","desc":"美国时间11月8日上午，美国大选投票在纽约州如火如荼地进行，特朗普夫妇和克林顿夫妇分别在纽约曼哈顿和查帕克进行了投票。特朗普夫妇前往川普大楼附近的曼哈顿投票处投票，不过由于曼哈顿是民主党优势地区，特朗普夫妇并没有受到热烈欢迎，甚至被喝了倒彩。希拉里夫妇在查帕克投票处则受到了支持者欢迎，在投票后与支持者拥抱握手。图 英国每日邮报"},{"img":"http://picture.youth.cn/qtdb/201611/W020161109281829963355.jpg","desc":"美国时间11月8日上午，美国大选投票在纽约州如火如荼地进行，特朗普夫妇和克林顿夫妇分别在纽约曼哈顿和查帕克进行了投票。特朗普夫妇前往川普大楼附近的曼哈顿投票处投票，不过由于曼哈顿是民主党优势地区，特朗普夫妇并没有受到热烈欢迎，甚至被喝了倒彩。希拉里夫妇在查帕克投票处则受到了支持者欢迎，在投票后与支持者拥抱握手。图 英国每日邮报"},{"img":"http://picture.youth.cn/qtdb/201611/W020161109281830257742.jpg","desc":"特朗普填写选票。美国时间11月8日上午，美国大选投票在纽约州如火如荼地进行，特朗普夫妇和克林顿夫妇分别在纽约曼哈顿和查帕克进行了投票。特朗普夫妇前往川普大楼附近的曼哈顿投票处投票，不过由于曼哈顿是民主党优势地区，特朗普夫妇并没有受到热烈欢迎，甚至被喝了倒彩。希拉里夫妇在查帕克投票处则受到了支持者欢迎，在投票后与支持者拥抱握手。图 英国每日邮报"},{"img":"http://picture.youth.cn/qtdb/201611/W020161109281831576714.jpg","desc":"特朗普和妻子在纽约投票。"},{"img":"http://picture.youth.cn/qtdb/201611/W020161109281832198313.jpg","desc":"特朗普和妻子在纽约投票。美国时间11月8日上午，美国大选投票在纽约州如火如荼地进行，特朗普夫妇和克林顿夫妇分别在纽约曼哈顿和查帕克进行了投票。特朗普夫妇前往川普大楼附近的曼哈顿投票处投票，不过由于曼哈顿是民主党优势地区，特朗普夫妇并没有受到热烈欢迎，甚至被喝了倒彩。希拉里夫妇在查帕克投票处则受到了支持者欢迎，在投票后与支持者拥抱握手。图 英国每日邮报"},{"img":"http://picture.youth.cn/qtdb/201611/W020161109281837479067.jpg","desc":"投票时特朗普看向妻子的选票美国时间11月8日上午，美国大选投票在纽约州如火如荼地进行，特朗普夫妇和克林顿夫妇分别在纽约曼哈顿和查帕克进行了投票。特朗普夫妇前往川普大楼附近的曼哈顿投票处投票，不过由于曼哈顿是民主党优势地区，特朗普夫妇并没有受到热烈欢迎，甚至被喝了倒彩。希拉里夫妇在查帕克投票处则受到了支持者欢迎，在投票后与支持者拥抱握手。图 英国每日邮报"},{"img":"http://picture.youth.cn/qtdb/201611/W020161109281837723654.jpg","desc":"巧合的是，特朗普的儿子艾瑞克投票时也看向妻子的选择，可谓子如其父。"},{"img":"http://picture.youth.cn/qtdb/201611/W020161109281838046113.jpg","desc":"小女儿贴好选举日贴纸后，特朗普携妻女合影。"},{"img":"http://picture.youth.cn/qtdb/201611/W020161109281838253245.jpg","desc":"纽约时间早上8点，希拉里与克林顿一起前往查帕克投票点投票。"},{"img":"http://picture.youth.cn/qtdb/201611/W020161109281838409257.jpg","desc":"投票后她与支持者拥抱和握手，得到支持者喝彩。"},{"img":"http://picture.youth.cn/qtdb/201611/W020161109281839310496.jpg","desc":"克林顿带着眼镜看选票，希拉里在他右侧弯腰填写选票。"},{"img":"http://picture.youth.cn/qtdb/201611/W020161109281880358681.jpg","desc":"希拉里弯腰填写选票。"},{"img":"http://picture.youth.cn/qtdb/201611/W020161109281881050299.jpg","desc":"希拉里的女儿在投票日前夜参加希拉里拉票活动后回到纽约。"}],"titleInfo":{"title":"组图：黄埔滩头探访海军战舰云集的广州造船厂","source":"河南商报","time":"04-22 11:24"}}

/***/ })

});
//# sourceMappingURL=2.js.map