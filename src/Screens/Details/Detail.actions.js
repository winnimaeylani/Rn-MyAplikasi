// @flow

import {DECREASE_COUNT, INCREASE_COUNT} from '../../Redux';

const increaseCount = () => (dispatch) => {
  dispatch({
    type: INCREASE_COUNT,
  });
};

const decreaseCount = () => (dispatch) => {
  dispatch({
    type: DECREASE_COUNT,
  });
};

export {increaseCount, decreaseCount};