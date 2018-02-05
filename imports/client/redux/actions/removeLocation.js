import { Meteor } from 'meteor/meteor'

export default function removeLocation (_id) {
  return (dispatch, getState) => {
    Meteor.call('Locations.remove', _id, (err, res) => {
      if (err) console.error('err', err)
    })
  }
}
