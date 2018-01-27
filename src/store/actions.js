import types from './mutation-types';
import getData from '../service/getData';

export default {
  async getImages({ commit }) {
    const data = await getData.getImgs();
    commit(types.GET_IMAGES, data);
  },
};
