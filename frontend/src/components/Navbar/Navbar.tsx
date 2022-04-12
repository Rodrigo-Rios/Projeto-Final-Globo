import React from 'react';
import Navitem from './Navitem';

function Navbar() {
  const navItems = [
    {
      key: 1,
      name: 'Ver Restaurantes',
      link: '/',
    },
    {
      key: 2,
      name: 'Cadastro',
      link: '/Cadastro',
    },
  ];

  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span className="fs-4">Jason{"'"}s Food</span>
      </a>

      <ul className="nav nav-pills">
        {navItems.map((item) => (
          <Navitem key={item.key} to={item.link}>
            {item.name}
          </Navitem>
        ))}
      </ul>
    </header>
  );
}

export default Navbar;
