import Navbar from "./components/Navbar";
import OuMap from "./components/OuMap";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
function App() {
  return (
    <div className="App" >
      <Navbar />
      <OuMap />
    </div>
  )
}
export default App;
