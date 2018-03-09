import { Observable } from 'rxjs';
import { of } from 'rxjs/observable';
import { delay, filter } from 'rxjs/operator';

import { INCREMENT, DECREMENT } from './constants';

export default {
  increment({ commit }) {
    commit(INCREMENT);
  },
  decrement({ commit }) {
    commit(DECREMENT);
  },
  incrementAsync({ commit }) {
    setTimeout(() => commit(INCREMENT), 1000);
  },
  decrementAsync({ commit }) {
    Observable::of(null)
      ::delay(1000)
      .subscribe(() => commit(DECREMENT));
  },
  incrementIfOdd({ commit, state }) {
    if (Math.abs(state.value % 2) === 1) {
      commit(INCREMENT);
    }
  },
  decrementIfEven({ commit, state }) {
    Observable::of(null)
      ::filter(() => state.value % 2 === 0)
      .subscribe(() => commit(DECREMENT));
  },
};
