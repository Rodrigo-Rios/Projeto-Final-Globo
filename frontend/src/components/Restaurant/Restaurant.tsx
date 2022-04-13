import React from 'react';
import './restaurant.scss';

interface RestaurantProps {
  name: string;
  description: string;
  imgUrl?: string;
  onClick?: () => void;
}

function Restaurant({ name, description, imgUrl }: RestaurantProps) {
  imgUrl =
    imgUrl ||
    'https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/de11c1f6-0d35-4170-9a40-147fbec8338a_COCOBAMBUSUL.png';
  return (
    <div
      className="list-group-item list-group-item-action fs-4 d-flex align-items-center restaurante-item py-4"
      aria-current="true"
    >
      <img className="rounded-circle me-4 img-logo" src={imgUrl}></img>
      <div>
        {name}
        <p className="fw-light fs-6 mb-0">{description}</p>
      </div>
    </div>
  );
}

export default Restaurant;
