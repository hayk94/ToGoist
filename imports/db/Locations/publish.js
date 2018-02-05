import { Meteor } from 'meteor/meteor'
import { Locations } from '.'

Meteor.publish('Locations', function () {
  return Locations.find({ ownerId: this.userId })
})
