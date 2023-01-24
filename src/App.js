import Navbar from './Components/Navbar';
import Person from './Components/Person';
import OuMap from "./Components/OuMap";
import Footer from "./Components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<OuMap />} />
          <Route path="/Person" element={<Person />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
;
export default App;
