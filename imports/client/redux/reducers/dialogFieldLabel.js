import { SET_DIALOG_FIELD_LABEL } from '../actions'
import { CLOSE_NEW_LOCATION_DIALOG } from '../actions'

export default function dialogFieldLabel (state = 'Describe your destination', action) {
  switch (action.type) {
    case SET_DIALOG_FIELD_LABEL:
      return action.payload
    case CLOSE_NEW_LOCATION_DIALOG:
      return 'Describe your destination'
  }
  return state
}
