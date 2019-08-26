import { COUNTER_CHANGE } from '../constants';
export function changeCount(count) {
  return {
    type: COUNTER_CHANGE,
    payload: count
  }
}