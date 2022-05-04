import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "375px",
  height: "170px",
};

function Maps({ lat, lng }) {
  const center = {
    lat: parseFloat(lat),
    lng: parseFloat(lng),

    // lat: 40.41985046973215,
    // lng: -3.701573169316847,
    // Lat: parseInt({ lat }, 10),
    // Lng: parseInt({ lng }, 10),
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCgpKx5j4SmHOobk09OL5Y_TDOBckE_Vzc",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      // center={{ lat, lng }}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Maps);
