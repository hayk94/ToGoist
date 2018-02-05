import { Meteor } from 'meteor/meteor'

export default function checkLocation (_id) {
  return (dispatch, getState) => {
    Meteor.call('Locations.toggle', _id, (err, res) => {
      if (err) console.error('err', err)
    })
  }
}
