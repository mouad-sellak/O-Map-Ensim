import React, {useState} from 'react'
import { GoogleMap, useJsApiLoader, Marker, Polygon, Polyline } from '@react-google-maps/api';
import person from "../person.json";
import path from "../path.json";
import { BsPersonSquare as SquareIcon } from 'react-icons/bs';

const containerStyle = {
  margin: "auto",
  marginTop:"2%",
  width: "80%",
  height: "800px",
  border: "2px solid blue",
  padding: "10px"
};

const paths = path.data.map(item=> item.pos)

const options = {
  fillColor: "lightblue",
  fillOpacity: 0,
  strokeColor: "blue",
  strokeOpacity: 1,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  geodesic: false,
  zIndex: 1
}


function OuMap() {
  const [position,setPosition]= useState({
    lat: 48.00448491218892,
    lng: 0.22230883657940106
  })
  const [icon, setIcon] = useState(SquareIcon);
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
      //   icon={s.image}
         position={s.pos}
         label={s.name}         
         />
      )
      };
      <></>
      <Polygon
      paths={paths}
      options={options}
    />
      
    </GoogleMap>
  ) : <></>
}

export default React.memo(OuMap)