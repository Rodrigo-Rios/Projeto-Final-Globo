import React, { useEffect, useState } from 'react';
import RestaurantModel from '../../models/RestaurantModel';
import Restaurant from '../Restaurant';
import RestaurantService from './RestaurantService';

import MenuList from '../MenuList';

function RestaurantList() {
  const restaurantService = new RestaurantService();
  const [restaurants, setRestaurants] = useState<RestaurantModel[]>([]);
  const [currentRestaurant, setCurrentRestaurant] = useState<number>();

  useEffect(() => {
    restaurantService.getRestaurants().then(setRestaurants);
  }, []);

  function handleClick(id: number) {
    setCurrentRestaurant(id);
  }

  return (
    <>
      <div className="ms-5 d-flex flex-row">
        <div className="col-4">
          <h2>Restaurantes</h2>
          <div className="list-group">
            {restaurants.map((restaurant) => (
              <Restaurant
                key={restaurant.restaurant_id}
                id={restaurant.restaurant_id}
                description={restaurant.description}
                image_restaurant={restaurant.image_restaurant}
                name={restaurant.name}
                activeRestaurant={currentRestaurant}
                onClick={() => handleClick(restaurant.restaurant_id)}
              />
            ))}
          </div>
        </div>
        {currentRestaurant && <MenuList id={currentRestaurant} />}
      </div>
    </>
  );
}

export default RestaurantList;
