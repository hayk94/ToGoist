import { SET_DIALOG_FIELD_LABEL } from '.'

export default function setLocation (label) {
  return {
    type: SET_DIALOG_FIELD_LABEL,
    payload: label
  }
}
