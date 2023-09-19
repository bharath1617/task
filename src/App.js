import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Landing from './components/Landingpage';
import NewAccount from './components/NewAccountpage';
import Loginpage from './components/Loginpage';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  // here toastify installed and used for show the success and error in webpage.

  // and route and routes are used to navigate the one component to anothe component
  // without any disturbance.
  return (
    <div className="App">
        
        <ToastContainer /> 
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/landingpage" element={<Landing />} />
          <Route path="/newaccount" element={<NewAccount />} />
          <Route path="/loginpage" element={<Loginpage />} />
        </Routes>
    </div>
  );
}

export default App;

