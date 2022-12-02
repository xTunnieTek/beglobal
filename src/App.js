import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
// import Layout from './Components/Layout';
// Route
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Global from './Pages/Global';
import Messages from './Pages/Messages';
import Facetime from './Pages/Facetime';



function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        {/* <Layout> */}
          <Routes>
            <Route path="/" element= {<Home/>} />
            <Route path="/Home" element= {<Home/>} />
            <Route path="/Global" element= {<Global/>} />
            <Route path="/Messages" element= {<Messages/>} />
            <Route path="/Facetime" element= {<Facetime/>} />
          </Routes>
        {/* </Layout> */}
      </Router>

    </React.Fragment>
  );
}

export default App;
