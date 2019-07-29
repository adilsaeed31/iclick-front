import React from "react"
import PropTypes from "prop-types"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import getConfig from "next/config"
const { publicRuntimeConfig } = getConfig()

const FooterMaps = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${
      publicRuntimeConfig.googleMapAPIKey
    }&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: "100%" }} />,
    containerElement: <div style={{ height: "400px" }} />,
    mapElement: <div style={{ height: "100%" }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  // 25.2641412,55.3057765 iClick Lat/Lng
  <GoogleMap defaultZoom={20.12} defaultCenter={{ lat: 25.2641412, lng: 55.3057765 }}>
    {props.isMarkerShown && <Marker position={{ lat: 25.2641412, lng: 55.3057765 }} />}
  </GoogleMap>
))

FooterMaps.defaultProps = {
  isMarkerShown: true
}

FooterMaps.propTypes = {
  isMarkerShown: PropTypes.bool.isRequired
}
export default FooterMaps
