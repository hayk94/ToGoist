import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { SearchBox } from "react-google-maps/lib/components/places/SearchBox"

import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    position: 'absolute',
    left: '80%',
    top: '75%'
  },
})

class MyMapComponent extends Component {
  searchBoxRef = null

  onMapClick = event => {
    console.log('onMapClick', event)
    const { lat, lng } = event.latLng
    this.props.setLocation({lat: lat(), lng: lng()})
  }

  onPlacesChanged = () => {
    const places = this.searchBoxRef.getPlaces()
    console.log('places', places)
    if (places.length <= 0) return
    const { lat, lng } = places[0].geometry.location
    this.props.setLocation({lat: lat(), lng: lng()})
  }

  render = () => <GoogleMap
      onClick={this.onMapClick}
      defaultZoom={8}
      center={this.props.mapLocation}
    >
      <SearchBox
      ref={elem => this.searchBoxRef = elem}
      // bounds={props.bounds}
      controlPosition={google.maps.ControlPosition.TOP_LEFT}
      onPlacesChanged={this.onPlacesChanged}
      >
        <input
          type="text"
          placeholder="Search for a place"
          style={{
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `240px`,
            height: `32px`,
            marginTop: `27px`,
            padding: `0 12px`,
            borderRadius: `3px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `14px`,
            outline: `none`,
            textOverflow: `ellipses`,
          }}
        />
      </SearchBox>
      {this.props.isMarkerShown && <Marker position={this.props.mapLocation} />}
      <Button
        onClick={this.props.openNewLocationDialog}
        fab color="primary" aria-label="add" className={`addButton ${this.props.classes.button}`}>
        <AddIcon />
      </Button>
    </GoogleMap>
}

export default withStyles(styles)(withScriptjs(withGoogleMap(MyMapComponent)))
