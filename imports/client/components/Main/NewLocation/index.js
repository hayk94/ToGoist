import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'

const styles = theme => ({
  dialog: {
    width: '80%',
    maxHeight: 435,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  }
})

class ConfirmationDialog extends Component {
  textFieldRef = null
  handleCancel = () => {
    this.props.onClose()
  }

  handleOk = () => {
    this.props.handleOk(this.textFieldRef.value)
  }

  render() {
    const { value, ...other } = this.props

    return (
      <Dialog
        maxWidth="sm"
        aria-labelledby="confirmation-dialog-title"
        {...other}
      >
        <DialogTitle id="confirmation-dialog-title">Add new place to visit</DialogTitle>
        <DialogContent>
          <TextField
            inputRef={elem => this.textFieldRef = elem}
           id="with-placeholder"
           label={this.props.dialogFieldLabel}
           error={this.props.dialogFieldLabel !== 'Describe your destination'}
           placeholder="Destination Name"
           className={this.props.classes.textField}
           margin="normal"
         />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleOk} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

ConfirmationDialog.propTypes = {
  onClose: PropTypes.func,
  value: PropTypes.string,
}


export default withStyles(styles)(ConfirmationDialog)
