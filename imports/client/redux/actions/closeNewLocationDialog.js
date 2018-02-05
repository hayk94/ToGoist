import { CLOSE_NEW_LOCATION_DIALOG } from '.'

export default function setLocation () {
  return {
    type: CLOSE_NEW_LOCATION_DIALOG,
    payload: false
  }
}
