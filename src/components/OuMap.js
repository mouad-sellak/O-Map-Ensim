import React, {useState} from 'react'
import { GoogleMap, useJsApiLoader, Marker, Polygon } from '@react-google-maps/api';
import { Button } from '@chakra-ui/react';
import person from "../person.json";
const containerStyle = {
  margin: "auto",
  width: "80%",
  height: "800px",
  border: "3px solid blue",
  padding: "10px"
};


function OuMap() {
  const [position,setPosition]= useState({
    lat: 48.00448491218892,
    lng: 0.22230883657940106
  })
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyD41VnECyFQMyRHzpps677Cux6uLhZvUhU"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
   // const bounds = new window.google.maps.LatLngBounds(position);
   // map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={position}
      onLoad={onLoad}
      onUnmount={onUnmount}
      zoom={10}
    >
      {person.data.map( (s,id)=>
         <Marker
         key={id}
         position={s.pos}
         label={s.name}         
         />
      )
      };
      <></>
    </GoogleMap>
  ) : <></>
}

export default React.memo(OuMap)