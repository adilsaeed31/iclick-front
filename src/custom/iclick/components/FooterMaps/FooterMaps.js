import React from "react";
import PropTypes from "prop-types";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const FooterMaps = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyC6OWpBTcMtN-R5lWnsnq26axxhS0ammwo&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: "100%" }} />,
    containerElement: <div style={{ height: "400px" }} />,
    mapElement: <div style={{ height: "100%" }} />
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  // 25.2640948,55.3034995 iClick Lat/Lng
  <GoogleMap defaultZoom={17} defaultCenter={{ lat: 25.2640948, lng: 55.3034995 }}>
    {props.isMarkerShown && <Marker position={{ lat: 25.2640948, lng: 55.3034995 }} />}
  </GoogleMap>
));

FooterMaps.defaultProps = {
  isMarkerShown: true
};

FooterMaps.PropTypes = {
  isMarkerShown: PropTypes.bool.isRequired
};
export default FooterMaps;
