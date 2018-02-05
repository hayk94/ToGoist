import { OPEN_NEW_LOCATION_DIALOG } from '.'

export default function setLocation () {
  return {
    type: OPEN_NEW_LOCATION_DIALOG,
    payload: true
  }
}
