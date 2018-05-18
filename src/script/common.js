// polyfill
import 'babel-polyfill';

// 扩展Object对象
import '../script/lib/object';

// pc触摸事件兼容
if (!('ontouchend' in document)) {
  const scriptEl = document.createElement('script');
  scriptEl.src = 'http://soneway.github.io/js/desktouch.js';
  document.head.appendChild(scriptEl);
}
