import React from 'react';
import './menuItem.scss';

interface MenuItemProps {
  name: string;
  description: string;
  price: number;
  extras: string[];
  image_product?: string;
}

function MenuItem({ name, description, price, image_product, extras }: MenuItemProps) {
 
  const image_product_src =
  image_product ||
    '../src/images/no_image2.png';
  

  return (
    <div className="card ms-2 mb-2" style={{ width: '18rem' }}>
      <img src={image_product_src} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text description">{description}</p>
        <p className="mb-0">Extras: {extras.join(', ')}</p>
        <p className="price mb-0">R$ {price}</p>
      </div>
    </div>
  );
}

export default MenuItem;
