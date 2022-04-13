import React from 'react';
import MenuItem from '../MenuItem';

function MenuList() {
  return (
    <div className="ms-5 d-flex flex-column">
      <h2 className="ms-2">Cardapio</h2>
      <div className="d-flex flex-row flex-wrap">
        <MenuItem name="Camarao internacional" description="camarao, ervilhas e muito mais" price={99.0} />
        <MenuItem name="Camarao internacional" description="camarao, ervilhas e muito mais" price={99.0} />
        <MenuItem name="Camarao internacional" description="camarao, ervilhas e muito mais" price={99.0} />
        <MenuItem name="Camarao internacional" description="camarao, ervilhas e muito mais" price={99.0} />
      </div>
    </div>
  );
}
export default MenuList;
