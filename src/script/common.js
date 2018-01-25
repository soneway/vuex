// polyfill
import './es6/object';
import '../script/es6/promise';
import 'regenerator-runtime/runtime';

// 扩展Object对象
import '../script/lib/object';

// pc触摸事件兼容
if (!('ontouchend' in document)) {
  const scriptEl = document.createElement('script');
  scriptEl.src = 'https://soneway.github.io/js/desktouch.js';
  document.head.appendChild(scriptEl);
}
