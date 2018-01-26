import jsonp from './lib/jsonp';

const origin = 'https://m.uczzd.cn';

// get请求函数,对应jsonp
function get(pathname, data) {
  return new Promise((resolve) => {
    jsonp.get({
      url: origin + pathname,
      data,
      success(rs) {
        resolve(rs);
      },
      error() {
        resolve();
      },
    });
  });
}

// post请求函数
function post(opts) {

}


export default {
  get,
  post,
};
