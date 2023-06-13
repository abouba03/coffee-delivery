import React from 'react';
import { GlobalStyle } from './styles/global';
import {Routes, Route} from "react-router-dom";
import { Home } from './pages/Home';
import { Order } from './pages/Order';
import { Delivery } from './pages/Delivery';
import { CoffeeProvider } from "./context/CoffeeContext";
import { Navbar } from "./components/Navbar";


function App() {
  return (
    <CoffeeProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/order' element={<Order/>}></Route>
        <Route path='/delivery' element={<Delivery/>}></Route>
      </Routes>
      <GlobalStyle/>
    </CoffeeProvider>
  );
}

export default App;
