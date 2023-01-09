import Navbar from "./components/Navbar";
import OuMap from "./components/OuMap";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import ARMode from "./components/ARMode";
function App() {


  return (
    <div className="App" >
      {/* <Navbar />
      <OuMap /> */}
      <ARMode/>
    </div>
  )
}
export default App;
