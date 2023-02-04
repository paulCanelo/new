import * as React from "react";
import { Routes, Route} from "react-router-dom"; //Outlet, Link 
import Tramites from './../pages/tramites/index'

export default function Rutas() {
  return (
      <Routes>
          <Route index element={<Tramites />} />
          <Route path="/index" element={<Tramites />} />
      </Routes>
  );
}