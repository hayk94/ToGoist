import React, { Component } from 'react'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import setLocation from '../../redux/actions/setLocation'
import openNewLocationDialog from '../../redux/actions/openNewLocationDialog'
import closeNewLocationDialog from '../../redux/actions/closeNewLocationDialog'
import addLocation from '../../redux/actions/addLocation'
import removeLocation from '../../redux/actions/removeLocation'
import checkLocation from '../../redux/actions/checkLocation'
import search from '../../redux/actions/search'

import Map from './Map'
import Loading from './Map/Loading.jsx'

import List from '../List'
import NewLocationDialog from './NewLocation'

import TextField from 'material-ui/TextField'

let Main = props => {
  console.log('Main', props)
  return <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
    <div style={{width: '100%'}}>
      {props.mapLocation && <Map
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCreJYtOeIGGKCWS2vByXzsWqJ1tnQ5nQE&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<Loading />}
        containerElement={<div style={{ height: '400px', position: 'relative' }} />}
        mapElement={<div style={{ height: `100%` }} />}
        mapLocation={props.mapLocation}
        setLocation={props.setLocation}
        openNewLocationDialog={props.openNewLocationDialog}
      /> || <Loading />}
    </div>
    <div style={{width: '80%'}}>
      <NewLocationDialog
        dialogFieldLabel={props.dialogFieldLabel}
        open={props.isNewLocationDialogOpen}
        onClose={props.closeNewLocationDialog}
        handleOk={props.addLocation}
       />
       <TextField
         value={props.searchTerm}
         onChange={event => props.search(event.target.value)}
         style={{width: '100%'}}
         id="search"
         label="Search"
         margin="normal"
       />
        <List
          searchTerm={props.searchTerm}
          onCheck={props.checkLocation}
          onClick={props.setLocation}
          onDelete={props.removeLocation}
          data={props.locations} />
    </div>
  </div>
}



Main = connect(({
  location,
  isNewLocationDialogOpen,
  dialogFieldLabel,
  searchTerm
}) => {
  console.log('connect', location)
  return {
    mapLocation: location,
    isNewLocationDialogOpen,
    dialogFieldLabel,
    searchTerm
  }
}, {
  setLocation,
  openNewLocationDialog,
  closeNewLocationDialog,
  addLocation,
  removeLocation,
  checkLocation,
  search
 })(Main)


Main = withRouter(Main)


export default Main
