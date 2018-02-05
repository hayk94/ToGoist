import { Meteor } from 'meteor/meteor'

import { Locations } from '.'

Meteor.methods({
  'Locations.insert' ({name, location}) {
    if (!Meteor.userId()) throw new Meteor.Error('noAuth', 'Please sign in to add a new place')
    if (!name) throw new Meteor.Error('emptyName', 'Name cannot be empty')
    return Locations.insert({
      name,
      ownerId: Meteor.userId(),
      createdAt: new Date(),
      visited: false,
      location
    })
  },
  'Locations.toggle' (_id) {
    const { visited } = Locations.findOne(_id)
    return Locations.update(_id, {$set: {visited: !visited}})
  },
  'Locations.remove' (_id) {
    return Locations.remove({_id})
  }
})
