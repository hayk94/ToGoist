import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { CircularProgress } from 'material-ui/Progress'
import purple from 'material-ui/colors/purple'

const styles = theme => ({
  progress: {
    margin: `0 ${theme.spacing.unit * 2}px`,
  },
})

function CircularIndeterminate (props) {
  const { classes } = props
  return (
    <div styles={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CircularProgress className={classes.progress} />
    </div>
  )
}

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CircularIndeterminate)
