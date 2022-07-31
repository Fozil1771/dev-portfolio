import React, { useEffect, useState } from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";

import Main from './components/Home/Main';
import About from './components/About';
import NotFound from './components/NotFound/NotFound';


function App() {

  return (
    <div className="App">

      <Routes >
        <Route path="/" index element={<Main />} />
        <Route path='about-me' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
