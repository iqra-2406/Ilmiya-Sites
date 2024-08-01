import './App.scss';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingScreen from "./screens/LandingScreen";
import OpenIlm from "./screens/OpenIlm";
import LXP from './screens/LXP';
import Test from './screens/Test';
import Schools from './screens/Schools';
import Partners from './screens/Partners';
import ROI from './screens/ROI';

function App() {
  return (
       <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<LandingScreen/>} />
            <Route path='openIlm' element={<OpenIlm/>} />
            <Route path='lxp' element={<LXP/>} />
            <Route path='test' element={<Test/>} />
            <Route path='school' element={<Schools/>} />
            <Route path='partners' element={<Partners/>} />
            <Route path='roi' element={<ROI/>} />
          </Routes>
        </Router>

    </div>
  );
}

export default App;
