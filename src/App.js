<<<<<<< HEAD
// import Navbar from "./components/Navbar";
import OuMap from "./components/OuMap";
import Navbar from './components/Navbar';
import Nav from './components/Nav';
import Person from './components/Person';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Nav />
     <OuMap />
      <Person />
     <Footer />
    </div>
=======
import Navbar from './Components/Navbar';
import Person from './Components/Person';
import OuMap from "./Components/OuMap";
import Footer from "./Components/Footer";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
       <div className="App">

 
     
      <Navbar />
  
  
      <Routes>
          <Route path="/" element={<OuMap />} />
          <Route path="/Person" element={<Person/>} />
        </Routes>

    
  
    <Footer />



  </div></Router>


>>>>>>> zakaria
  )
}
;
export default App;
