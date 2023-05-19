import React from 'react';
import {Routes, Route} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";

import './scss/app.scss';


function App() {
  return (
    <Routes>
        <Route path='/' element={<MainLayout/>}>
            <Route path='' element={<Home/>}/>
        </Route>
    </Routes>
  );
}

export default App;
