import React, { useEffect, useState } from 'react';
import RestaurantModel from '../../models/RestaurantModel';
import Restaurant from '../Restaurant';
import RestaurantService from './RestaurantService';

import MenuList from '../MenuList';

function RestaurantList() {
  const restaurantService = new RestaurantService();
  const [restaurants, setRestaurants] = useState<RestaurantModel[]>([]);

  useEffect(() => {
    restaurantService.getRestaurants().then(setRestaurants);
  }, []);

  return (
    <>
      <div className="ms-5 d-flex flex-row">
        <div className="col-4">
          <h2>Restaurantes</h2>
          <div className="list-group">
            {restaurants.map((restaurant) => (
              <Restaurant key={restaurant.restaurant_id} description={restaurant.description} name={restaurant.name} />
            ))}
          </div>
        </div>
        <MenuList />
      </div>
    </>
  );
}

export default RestaurantList;
