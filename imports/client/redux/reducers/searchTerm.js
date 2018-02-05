import { SEARCH } from '../actions'

export default function location (state = '', action) {
  switch (action.type) {
    case SEARCH:
      return action.payload
  }
  return state
}
