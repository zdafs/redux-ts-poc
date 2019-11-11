import { INCREMENT, DECREMENT, UPDATE } from './types';

export default (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    case UPDATE:
      return action.payload.value;
    default:
      return state
  }
}
