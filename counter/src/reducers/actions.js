import { INCREMENT, DECREMENT, UPDATE } from './types';

export const incrementAction = () => ({
  type: INCREMENT,
});

export const decrementAction = () => ({
  type: DECREMENT,
});

export const updateValueAction = (value) => {
  return ({
    type: UPDATE,
    payload: {
      value: Number(value),
    },
  });
};
