import { SET_SEARCH_TERM } from './actions'

export function setsearchTerm (searchTerm) {
  return { type: SET_SEARCH_TERM, searchTerm }
}
