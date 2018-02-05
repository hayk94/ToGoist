import React, { Component } from 'react'
import { Template } from 'meteor/templating'
import { Blaze } from 'meteor/blaze'

class Accounts extends Component {
  container = null
  componentDidMount() {
    // Render the Blaze accounts form then find the div
    // we just rendered in the 'render' method and place
    // the Blaze accounts form in that div
    this.view = Blaze.render(Template.loginButtons, this.container)
  }

  componentWillUnmount() {
    // Go find the forms we created and destroy them
    // We need to clean up those forms ourselves
    Blaze.remove(this.view)
  }

  render() {
    return (
      <div ref={elem => this.container = elem}></div>
    )
  }
}

export default Accounts
