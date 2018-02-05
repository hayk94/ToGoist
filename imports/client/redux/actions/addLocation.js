import { Meteor } from 'meteor/meteor'

import setDialogFieldLabel from './setDialogFieldLabel'
import closeNewLocationDialog from './closeNewLocationDialog'

export default function addLocation (name) {
  return (dispatch, getState) => {
    Meteor.call('Locations.insert', {name, location: getState().location}, (err, res) => {
      if (err) {
        console.error('err', err)
        dispatch(setDialogFieldLabel(err.reason))
      } else dispatch(closeNewLocationDialog())
    })
  }
}
