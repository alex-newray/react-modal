import update from 'immutability-helper';
import _ from 'lodash'
import defaultState from '../defaultState'

const RMR = (state=defaultState, action) => {
  switch (action.type) {
    case 'RM_INTERNAL_SET':
      return update(state, { [action.name] : {$set: action.value}});
    case 'RM_INTERNAL_PUSH':
      return update(state, { 'lst' : {$push: [action.value]}});
    case 'RM_INTERNAL_REMOVE':
      const new_state = _.filter(state.lst, function(n) {
        return n.uid != action.uid;
      });
      return update(state, { 'lst' : {$set: new_state}});
    default:
      return state
  }
}

export default RMR
