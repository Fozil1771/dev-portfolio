import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Main from './components/Home/Main';
import About from './components/About';
import NotFound from './components/NotFound';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route path="/" index element={<Main />} />
          <Route path='about-me' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
