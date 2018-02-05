import { SET_LOCATION } from '.'

export default function setLocation (location) {
  return {
    type: SET_LOCATION,
    payload: location
  }
}
