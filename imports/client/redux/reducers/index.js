import { combineReducers } from 'redux'

import locationReducer from './locationReducer'
import isNewLocationDialogOpen from './isNewLocationDialogOpen'
import dialogFieldLabel from './dialogFieldLabel'
import searchTerm from './searchTerm'

const rootReducer = combineReducers({
  location: locationReducer,
  isNewLocationDialogOpen,
  dialogFieldLabel,
  searchTerm
})

export default rootReducer
