import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withTracker } from 'meteor/react-meteor-data'
import { withRouter } from 'react-router-dom'

import setUserId from './redux/actions/userReducerActions/setUserId'
import setUserEmail from './redux/actions/userReducerActions/setUserEmail'

import { getUserEmail } from '../api/functions'

class UserContainer extends Component {
  componentWillReceiveProps = (nextProps) => {
    // TODO: test this
    console.warn('componentWillReceiveProps')
    console.log('nextProps', nextProps)
    console.log('this.props', this.props)
    if (nextProps.meteorUser && !_.isEqual(nextProps.meteorUser, this.props.user)) {
      this.props.setUserEmail(getUserEmail(nextProps.meteorUser))
      this.props.setUserId(nextProps.meteorUser._id)
    }
  }
  componentDidMount = () => {
    console.warn('componentDidMount props', this.props)
  }
  render = () => this.props.children
}

UserContainer = connect(state => {
  return {user: state.user}
}, { setUserId, setUserEmail })(UserContainer)

UserContainer = withTracker(props => {
  return { meteorUser: Meteor.user() }
})(UserContainer)

UserContainer = withRouter(UserContainer)

export default UserContainer
