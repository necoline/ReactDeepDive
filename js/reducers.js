import { SET_SEARCH_TERM } from './actions'

const DEFAULT_STATE = {
  searchTerm: 'hey ho'
}

const setSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {searchTerm: action.searchTerm})
  return newState
}
//most reducers look like this
//

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action)
    default:
    return state
  }
}
//pass in same state and action of rootReducer and let setSearchTerm handle the reducing (replacing state with new state)

export default rootReducer
