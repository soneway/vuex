webpackJsonp([2],{161:function(t,e,n){function i(t){s||n(193)}var s=!1,o=n(13)(n(169),n(185),i,null,null);o.options.__file="/Users/soneway/Sites/github/vuex/src/views/UcGallery.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] UcGallery.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},169:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(26),o=i(s),r=n(74),a=i(r),c=n(198),l=i(c);e.default={components:{PiCarousel:a.default},created:function(){(0,o.default)(this,l.default)},data:function(){return{thumbIndex:0,dataList:[],titleInfo:{}}},mounted:function(){var t=this;this.$refs.carousel.$on("slide",function(e){t.thumbSlide(e)})},methods:{thumbSlide:function(t){t!==this.thumbIndex&&(this.thumbIndex=t,this.$refs.carousel.slideToIndex(t),this.center(t))},__thumbClick:function(t){this.thumbSlide(t)},center:function(t){var e=this.$refs.thumbWrap,n=document.querySelector(".thumb:nth-of-type("+(t+1)+")");e.scrollLeft=n.offsetLeft-(e.offsetWidth-n.offsetWidth)/2}}}},173:function(t,e,n){e=t.exports=n(12)(),e.push([t.i,'\n@charset "UTF-8";\n.uc-gallery {\n  height: 100%;\n  position: relative;\n  /*缩略图高度*/\n  /*焦点图*/\n  /*缩略图*/\n}\n.uc-gallery .carouselWrap {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 42px;\n}\n.uc-gallery .carouselWrap .pi-carousel.pi-loading .pi-item:before {\n      top: 100px;\n}\n.uc-gallery .imgWrap {\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    font-size: 15px;\n    color: #999;\n    line-height: 150%;\n    background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05) 61%, #fff 0%);\n    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 61%, #fff 0%);\n    /*页码指示*/\n    /*标题*/\n    /*来源和日期*/\n    /*描述信息*/\n}\n.uc-gallery .imgWrap .img {\n      display: block;\n      max-width: 100%;\n      max-height: 60%;\n      min-height: 200px;\n      margin: 0 auto;\n}\n.uc-gallery .imgWrap .imgInfo {\n      padding: 15px;\n      background: #fff;\n      min-height: 40%;\n}\n.uc-gallery .imgWrap .indicator {\n      font-weight: 100;\n}\n.uc-gallery .imgWrap .indicator span {\n        font-size: 30px;\n        color: #333;\n}\n.uc-gallery .imgWrap .title {\n      font-size: 20px;\n      padding: 15px 0;\n      color: #333;\n}\n.uc-gallery .imgWrap .subTitle {\n      color: #bbb;\n      font-size: 14px;\n      line-height: 100%;\n}\n.uc-gallery .imgWrap .subTitle > span {\n        display: inline-block;\n}\n.uc-gallery .imgWrap .subTitle > span:not(:first-of-type) {\n          border-left: 1px solid #bbb;\n          margin-left: 12px;\n          padding: 0 12px;\n}\n.uc-gallery .imgWrap .desc {\n      padding-top: 15px;\n      text-indent: 2em;\n}\n.uc-gallery .thumbWrap {\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    height: 42px;\n    white-space: nowrap;\n    overflow-y: hidden;\n    overflow-x: auto;\n}\n.uc-gallery .thumb {\n    width: 60px;\n    height: 100%;\n    background: center center;\n    background-size: cover;\n    display: inline-block;\n}\n.uc-gallery .thumb:not(:last-of-type) {\n      border-left: 1px solid #fff;\n}\n.uc-gallery .thumb.selected {\n      border: 2px solid #06f;\n}\n.uc-gallery .thumb.selected + .thumb {\n        border: none;\n}\n',""])},185:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"view uc-gallery"},[n("div",{staticClass:"carouselWrap"},[n("PiCarousel",{ref:"carousel",attrs:{isShowPager:!1,isLoop:!1,dataList:t.dataList},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"imgWrap"},[n("img",{staticClass:"img",attrs:{src:e.itemData.img}}),t._v(" "),n("div",{staticClass:"imgInfo"},[n("p",{staticClass:"indicator"},[n("span",[t._v(t._s(e.index+1))]),t._v("/"+t._s(t.dataList.length)+"\n            ")]),t._v(" "),n("p",{staticClass:"title"},[t._v(t._s(t.titleInfo.title))]),t._v(" "),n("p",{staticClass:"subTitle"},[n("span",{staticClass:"source"},[t._v(t._s(t.titleInfo.source))]),n("span",{staticClass:"time"},[t._v(t._s(t.titleInfo.time))])]),t._v(" "),n("p",{staticClass:"desc"},[t._v(t._s(e.itemData.desc))])])])]}}])})],1),t._v(" "),n("div",{ref:"thumbWrap",staticClass:"thumbWrap"},t._l(t.dataList,function(e,i){return n("div",{staticClass:"thumb",class:{selected:i===t.thumbIndex},style:{backgroundImage:"url("+e.img+")"},on:{click:function(e){t.__thumbClick(i)}}})}))])},staticRenderFns:[]},t.exports.render._withStripped=!0},193:function(t,e,n){var i=n(173);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(14)("6f36db3e",i,!1,{})},198:function(t,e){t.exports={dataList:[{img:"http://m.k618.cn/uctp/201703/W020170309517271350068.jpg",desc:"美国时间11月8日上午，美国大选投票在纽约州如火如荼地进行，特朗普夫妇和克林顿夫妇分别在纽约曼哈顿和查帕克进行了投票。特朗普夫妇前往川普大楼附近的曼哈顿投票处投票，不过由于曼哈顿是民主党优势地区，特朗普夫妇并没有受到热烈欢迎，甚至被喝了倒彩。希拉里夫妇在查帕克投票处则受到了支持者欢迎，在投票后与支持者拥抱握手。图 英国每日邮报"},{img:"http://m.k618.cn/uctp/201703/W020170309517280709840.jpg",desc:"美国时间11月8日上午，美国大选投票在纽约州如火如荼地进行，特朗普夫妇和克林顿夫妇分别在纽约曼哈顿和查帕克进行了投票。特朗普夫妇前往川普大楼附近的曼哈顿投票处投票，不过由于曼哈顿是民主党优势地区，特朗普夫妇并没有受到热烈欢迎，甚至被喝了倒彩。希拉里夫妇在查帕克投票处则受到了支持者欢迎，在投票后与支持者拥抱握手。图 英国每日邮报"},{img:"http://m.k618.cn/uctp/201703/W020170309517297138416.jpg",desc:"美国时间11月8日上午，美国大选投票在纽约州如火如荼地进行，特朗普夫妇和克林顿夫妇分别在纽约曼哈顿和查帕克进行了投票。特朗普夫妇前往川普大楼附近的曼哈顿投票处投票，不过由于曼哈顿是民主党优势地区，特朗普夫妇并没有受到热烈欢迎，甚至被喝了倒彩。希拉里夫妇在查帕克投票处则受到了支持者欢迎，在投票后与支持者拥抱握手。图 英国每日邮报"},{img:"http://m.k618.cn/uctp/201703/W020170309517288414818.jpg",desc:"美国时间11月8日上午，美国大选投票在纽约州如火如荼地进行，特朗普夫妇和克林顿夫妇分别在纽约曼哈顿和查帕克进行了投票。特朗普夫妇前往川普大楼附近的曼哈顿投票处投票，不过由于曼哈顿是民主党优势地区，特朗普夫妇并没有受到热烈欢迎，甚至被喝了倒彩。希拉里夫妇在查帕克投票处则受到了支持者欢迎，在投票后与支持者拥抱握手。图 英国每日邮报"},{img:"http://picture.youth.cn/qtdb/201611/W020161109281829963355.jpg",desc:"美国时间11月8日上午，美国大选投票在纽约州如火如荼地进行，特朗普夫妇和克林顿夫妇分别在纽约曼哈顿和查帕克进行了投票。特朗普夫妇前往川普大楼附近的曼哈顿投票处投票，不过由于曼哈顿是民主党优势地区，特朗普夫妇并没有受到热烈欢迎，甚至被喝了倒彩。希拉里夫妇在查帕克投票处则受到了支持者欢迎，在投票后与支持者拥抱握手。图 英国每日邮报"},{img:"http://picture.youth.cn/qtdb/201611/W020161109281830257742.jpg",desc:"特朗普填写选票。美国时间11月8日上午，美国大选投票在纽约州如火如荼地进行，特朗普夫妇和克林顿夫妇分别在纽约曼哈顿和查帕克进行了投票。特朗普夫妇前往川普大楼附近的曼哈顿投票处投票，不过由于曼哈顿是民主党优势地区，特朗普夫妇并没有受到热烈欢迎，甚至被喝了倒彩。希拉里夫妇在查帕克投票处则受到了支持者欢迎，在投票后与支持者拥抱握手。图 英国每日邮报"},{img:"http://picture.youth.cn/qtdb/201611/W020161109281831576714.jpg",desc:"特朗普和妻子在纽约投票。"},{img:"http://picture.youth.cn/qtdb/201611/W020161109281832198313.jpg",desc:"特朗普和妻子在纽约投票。美国时间11月8日上午，美国大选投票在纽约州如火如荼地进行，特朗普夫妇和克林顿夫妇分别在纽约曼哈顿和查帕克进行了投票。特朗普夫妇前往川普大楼附近的曼哈顿投票处投票，不过由于曼哈顿是民主党优势地区，特朗普夫妇并没有受到热烈欢迎，甚至被喝了倒彩。希拉里夫妇在查帕克投票处则受到了支持者欢迎，在投票后与支持者拥抱握手。图 英国每日邮报"},{img:"http://picture.youth.cn/qtdb/201611/W020161109281837479067.jpg",desc:"投票时特朗普看向妻子的选票美国时间11月8日上午，美国大选投票在纽约州如火如荼地进行，特朗普夫妇和克林顿夫妇分别在纽约曼哈顿和查帕克进行了投票。特朗普夫妇前往川普大楼附近的曼哈顿投票处投票，不过由于曼哈顿是民主党优势地区，特朗普夫妇并没有受到热烈欢迎，甚至被喝了倒彩。希拉里夫妇在查帕克投票处则受到了支持者欢迎，在投票后与支持者拥抱握手。图 英国每日邮报"},{img:"http://picture.youth.cn/qtdb/201611/W020161109281837723654.jpg",desc:"巧合的是，特朗普的儿子艾瑞克投票时也看向妻子的选择，可谓子如其父。"},{img:"http://picture.youth.cn/qtdb/201611/W020161109281838046113.jpg",desc:"小女儿贴好选举日贴纸后，特朗普携妻女合影。"},{img:"http://picture.youth.cn/qtdb/201611/W020161109281838253245.jpg",desc:"纽约时间早上8点，希拉里与克林顿一起前往查帕克投票点投票。"},{img:"http://picture.youth.cn/qtdb/201611/W020161109281838409257.jpg",desc:"投票后她与支持者拥抱和握手，得到支持者喝彩。"},{img:"http://picture.youth.cn/qtdb/201611/W020161109281839310496.jpg",desc:"克林顿带着眼镜看选票，希拉里在他右侧弯腰填写选票。"},{img:"http://picture.youth.cn/qtdb/201611/W020161109281880358681.jpg",desc:"希拉里弯腰填写选票。"},{img:"http://picture.youth.cn/qtdb/201611/W020161109281881050299.jpg",desc:"希拉里的女儿在投票日前夜参加希拉里拉票活动后回到纽约。"}],titleInfo:{title:"组图：黄埔滩头探访海军战舰云集的广州造船厂",source:"河南商报",time:"04-22 11:24"}}}});