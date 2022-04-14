import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import RestaurantList from './components/RestaurantList';
import FormRestaurant from './components/FormRestaurant';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route index element={<RestaurantList />} />
        <Route path="/Cadastro" element={<FormRestaurant />} />
      </Routes>
    </div>
  );
}

export default App;
