import types from './mutation-types';

export default {
  [types.GET_IMAGES](state, data) {
    state.images = data;
  },
};
