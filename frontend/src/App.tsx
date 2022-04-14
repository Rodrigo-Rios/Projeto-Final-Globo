import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import RestaurantList from './components/RestaurantList';
import RestaurantForm from './components/Register'

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route index element={<RestaurantList />} />
        <Route path='/Cadastro' element={<RestaurantForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
