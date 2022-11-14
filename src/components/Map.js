import React from 'react'
import {useRef, useEffect} from 'react'

const Map = ({ center, zoom }) => {
    const ref = useRef(null);
    useEffect(() => {
        new window.google.maps.Map(ref.current, {
            center,
            zoom,
        });
    });
    return (
        <div ref={ref} id="map" />   
    )
}
export default Map
