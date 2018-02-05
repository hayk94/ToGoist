import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import List from 'material-ui/List'
import Item from './Item'

import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'
import { Locations } from '../../../db/Locations'


const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    margin: theme.spacing.unit,
  }
})

class LocationList extends Component {

  render () {
    if (!this.props.data) return <div></div>
    const { classes, data } = this.props
    return (
      <div className={classes.root}>
        <List className='list'>
          {data.map(location => (
            <Item
              onDelete={this.props.onDelete}
              onCheck={this.props.onCheck}
              onClick={this.props.onClick}
              checked={location.visited}
              location={location.location}
              text={location.name}
              key={location._id}
              _id={location._id}
              classes={this.props.classes} />
          ))}
        </List>
      </div>
    )
  }
}

LocationList.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired
}

LocationList = withTracker(props => {
  console.log('withTracker()', props)
  Meteor.subscribe('Locations')
  let data = Locations.find({}).fetch().filter(location => location.name.toLowerCase().includes(props.searchTerm))
  return { data }
})(LocationList)

export default withStyles(styles)(LocationList)
