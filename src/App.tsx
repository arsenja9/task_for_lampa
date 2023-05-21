import React from 'react';
import {Routes, Route} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";

import './scss/app.scss';
import Cart from "./pages/Cart";


function App() {
  return (
    <Routes>
        <Route path='/' element={<MainLayout/>}>
            <Route path='' element={<Home/>}/>
            <Route path='/cart' element={<React.Suspense fallback={'loading.....'}>
                <Cart/>
            </React.Suspense>}/>
        </Route>
    </Routes>
  );
}

export default App;
