// import React from 'react'
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
// import OuMap from './OuMap'
// const GoogleMap = () => {
//   const apiKey = "AIzaSyBCMpIK7y0VhfzQS-AiFM3yzzGiiNFrPr8";
//   const center = { lat: 5.4, lng: 17.44 };
//   const zoom = 4;
//   console.log(apiKey)
//   return (
//     <Wrapper apiKey={apiKey}>
//       <OuMap />
//     </Wrapper>
//   )
// }
// export default GoogleMap





// import React from "react";
// import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// export default function GoogleMap(){
//   const defaultProps = {
//     center: {
//       lat: 10.99835602,
//       lng: 77.01502627
//     },
//     zoom: 11
//   };
//   return (
//     // Important! Always set the container height explicitly
//     <div style={{ height: '80vh', width: '100%' }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: "AIzaSyBCMpIK7y0VhfzQS-AiFM3yzzGiiNFrPr8" }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//       >
//         <AnyReactComponent
//           lat={59.955413}
//           lng={30.337844}
//           text="My Marker"
//         />
//       </GoogleMapReact>
//     </div>
//   );
// }

// import React from 'react'
// import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

// const OuMap=()=>{
//   const {isLoaded} = useLoadScript({
//     googleMapsApiKey:"AIzaSyD6BbXbMR7-91GG9BGl6OjZAXSHCr1PATE"
//   })
//   if(!isLoaded) return <div>Loading...</div>
//   return <Map />
// }

// const Map=()=>{
//   return <GoogleMap zoom={10} center={{lat:44, lng:-88}} ></GoogleMap>
// }




import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
const OuMap=()=>{
  return(
    <MapContainer center={[51.505, -0.09]} height={13} zoom={13} >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[51.505, -0.09]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
    )
}
export default OuMap