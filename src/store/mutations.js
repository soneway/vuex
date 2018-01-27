import types from './mutation-types';

export default {
  [types.GET_IMAGES](state, data) {
    const { images } = state;
    images.push(...data);
    state.images = images;
  },
};
