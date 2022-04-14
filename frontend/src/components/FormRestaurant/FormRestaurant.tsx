import React, { useState } from 'react';
import FormCardapio from './FormCardapio';
import RestaurantForm from '../Register/Restaurant';

function FormRestaurant() {
  const [nav, setNav] = useState('restaurante');

  function updateNav(nav: string) {
    setNav(nav);
  }

  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            className={`nav-link ${nav === 'restaurante' ? 'active' : ''}`}
            aria-current="page"
            href="#"
            onClick={() => updateNav('restaurante')}
          >
            Restaurante
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${nav === 'cardapio' ? 'active' : ''}`}
            href="#"
            onClick={() => updateNav('cardapio')}
          >
            Cardápio
          </a>
        </li>
      </ul>

      {nav === 'restaurante' ? <RestaurantForm /> : <FormCardapio />}
    </>
  );
}

export default FormRestaurant;
