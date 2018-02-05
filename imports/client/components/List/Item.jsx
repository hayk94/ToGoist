import React from 'react'
import PropTypes from 'prop-types'

import { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui-icons/Delete'

const Item = props => <ListItem
  onClick={() => props.onClick(props.location)}
  dense
  button
  className={props.classes.listItem}>
  <ListItemText primary={props.text} />
  <ListItemSecondaryAction>
    <Checkbox
      onChange={() => props.onCheck(props._id)}
      checked={props.checked}
    />
    <IconButton
      onClick={() => props.onDelete(props._id)}
      className={props.classes.button}
      aria-label="Delete">
      <DeleteIcon />
    </IconButton>
  </ListItemSecondaryAction>
</ListItem>

Item.propTypes = {
  classes: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired
}

export default Item
