// @flow

import type {ActionDefaultProp} from '../../Types/DefaultTypes';
import {DECREASE_COUNT, INCREASE_COUNT} from '../../Redux';

type State = {
    count: number,
  };
  
  const initialState: State = {
    count: 0,
  };
  
  export const detail_store = (state = initialState, action: ActionDefaultProp) => {
    switch (action.type) {
      case INCREASE_COUNT:
        return {
          ...state,
          count: state.count + 1,
        };
      case DECREASE_COUNT:
        return {
          ...state,
          count: state.count - 1,
        };
      default:
        return {...state};
    }
  };