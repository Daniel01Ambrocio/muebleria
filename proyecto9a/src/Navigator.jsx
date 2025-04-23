import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header2 from './components/Header';

import Footere2 from './components/Footer';

const Navigator = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header2 />}>
          
          <Route path="footer" element={<Footeer2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default Navigator;