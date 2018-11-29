import { INC_NUMBER, DEC_NUMBER } from "../actions";

export default function performAction(state = { num: 0 }, action) {
  switch (action.type) {
    case INC_NUMBER:
      console.log("Action performed from the reducer");
      console.log(action);
      // console.log(state, action);
      // console.log(state.num);
      console.log(action.num);
      // let num = state.num;
      let num = action.num;
      num += 1;
      return { num };

    case DEC_NUMBER:
      // num = state.num;
      num = action.num;
      if (num > 0) {
        num -= 1;
      }
      return { num };

    default:
      return state;
  }
}
