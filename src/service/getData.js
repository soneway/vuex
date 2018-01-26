import request from '../script/request';

export default {
// 获取图片数据
  async getImgs() {
    const rs = await request.get('/iflow/api/v1/channel/100?method=new');
    if (!rs) {
      return;
    }
    const articles = Object.getValByPath(rs, 'data.articles', {});
    return Object.keys(articles).map((key) => Object.getValByPath(articles, `${key}.images.0.url`)).filter((item) => item);
  },
};
