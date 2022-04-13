import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import RestaurantList from './components/RestaurantList';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route index element={<RestaurantList />} />
      </Routes>
    </div>
  );
}

export default App;
