import React, {useState} from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { Button } from '@chakra-ui/react';

const containerStyle = {
  width: '1000px',
  height: '600px',
  margin: '50px',
};


const students = [
   {
    lat: 48.00454233910342,
    lng: 0.21406909053153916
  },
   {
    lat: 48.003393788665164,
    lng: 0.20600100585967443
  },
  {
    lat: 48.003393788665164,
    lng: 0.20600100585967443
  }
]


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
    const bounds = new window.google.maps.LatLngBounds(position);
    map.fitBounds(bounds);
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
      zoom={1}
    >
      {/* {students.map( (s)=>
         <Marker
         onLoad={() => console.log("marker")}
         position={s}
         title="Marker"
         />
      )
      }; */}
      <Marker
         onLoad={() => console.log("marker")}
         position={position}
         onClick={()=>console.log('CHNCJDBCDJ')}
         title="Marker"
         />
      <></>
    </GoogleMap>
  ) : <></>
}

export default React.memo(OuMap)