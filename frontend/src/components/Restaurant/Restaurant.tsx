import React  from 'react';
import './restaurant.scss';


interface RestaurantProps {
  id: number;
  name: string;
  description: string;
  image_restaurant?: string;
  onClick?: () => void;
  activeRestaurant?: number;
}

function Restaurant({ id, name, description, image_restaurant, onClick, activeRestaurant }: RestaurantProps) {

  const image_restaurant_src =
  image_restaurant ||
    '../src/images/no_image1.png';
    
  return (
    <div
      className={`list-group-item list-group-item-action fs-4 d-flex align-items-center restaurante-item py-4 ${
        activeRestaurant === id ? 'active' : ''
      }`}
      aria-current="true"
      onClick={onClick}
    >
      
      <img className="rounded-circle me-4 img-logo" src={image_restaurant_src}></img>  
      <div>
        {name}
        <p className="fw-light fs-6 mb-0">{description}</p>
      </div>
    </div>
  );
}

export default Restaurant;
