import { SET_LOCATION } from '../actions'

export default function location (state = { lat: -34.397, lng: 150.644 }, action) {
  switch (action.type) {
    case SET_LOCATION:
      return action.payload
  }
  return state
}
