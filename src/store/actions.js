import types from './mutation-types';
import getData from '../service/getData';

export default {
  getImages({ commit }) {
    const data = getData.getImgs();
    commit(types.GET_IMAGES, data);
  },
};
