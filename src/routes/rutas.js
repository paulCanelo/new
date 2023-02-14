import * as React from "react";
import { Routes, Route} from "react-router-dom"; //Outlet, Link 
import Tramites from './../pages/tramites/index'
import View from './../pages/tramites/view'

export default function Rutas() {
  return (
      <Routes>
          <Route index element={<Tramites />} />
          <Route path="/view/:idTramite" element={<View />} />
          <Route path="/index" element={<Tramites />} />
      </Routes>
  );
}