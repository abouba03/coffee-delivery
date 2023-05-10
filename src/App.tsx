import React from 'react';
import { Navbar } from './components/Navbar';
import { GlobalStyle } from './styles/global';
import {Routes, Route} from "react-router-dom";
import { Home } from './pages/Home';
import { Order } from './pages/Order';
import { Delivery } from './pages/Delivery';



function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/order' element={<Order/>}></Route>
        <Route path='/delivery' element={<Delivery/>}></Route>
      </Routes>
      
      <GlobalStyle/>
    </>
  );
}

export default App;
