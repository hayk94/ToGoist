import { OPEN_NEW_LOCATION_DIALOG } from '../actions'
import { CLOSE_NEW_LOCATION_DIALOG } from '../actions'

export default function isNewLocationDialogOpen (state = false, action) {
  switch (action.type) {
    case OPEN_NEW_LOCATION_DIALOG:
      return action.payload
    case CLOSE_NEW_LOCATION_DIALOG:
      return action.payload
  }
  return state
}
