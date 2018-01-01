import { SAVE_COMMENT } from '../actions/types';

export default function(state = [], action){
  switch(action.type){
    case SAVE_COMMENT:
    //spread operator equivalent to taking the existing array and concating on another array with the action.payload
    // return state.concat([action.payload]);
    return [ ...state, action.payload ];
  }
  return state;
}
