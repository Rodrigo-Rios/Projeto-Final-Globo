import React from 'react';
import './menuItem.scss';

interface MenuItemProps {
  name: string;
  description: string;
  price: number;
  imgUrl?: string;
}

function MenuItem({ name, description, price, imgUrl }: MenuItemProps) {
  const imgSrc =
    imgUrl ||
    'https://static-images.ifood.com.br/image/upload/t_medium/pratos/a0474ddc-7b99-44eb-9a3d-21680f5ef80d/202101140932_MQbO_.jpeg';

  return (
    <div className="card ms-2 mb-2" style={{ width: '18rem' }}>
      <img src={imgSrc} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text description">{description}</p>
        <p className="price mb-0">R$ {price}</p>
      </div>
    </div>
  );
}

export default MenuItem;
