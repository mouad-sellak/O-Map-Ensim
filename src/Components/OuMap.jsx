import React from 'react'
import { GoogleMap, useJsApiLoader,Marker  } from '@react-google-maps/api';

const containerStyle = {
  width: '1200px',
  height: '600px',
  margin:'50px',
  marginLeft:'auto',
  marginRight:'auto',
  border:'2px solid blue',
borderRadius:'20px'  
};

const center = {
  lat:47.93833,
  lng:0.22167
};

function OuMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyD41VnECyFQMyRHzpps677Cux6uLhZvUhU"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker
      onLoad={()=>console.log("marker")}
      position={center}
    />
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(OuMap)