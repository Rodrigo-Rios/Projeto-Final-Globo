import React, { useEffect } from 'react';
import MenuItem from '../MenuItem';
import MenuService from './MenuService';
import MenuModel from '../../models/MenuModel';
interface MenuListProps {
  id: number;
}

function MenuList({ id }: MenuListProps) {
  const menuService = new MenuService();

  const [menu, setMenu] = React.useState<MenuModel[]>([]);

  useEffect(() => {
    menuService.getMenu(id).then((menu) => setMenu(menu));
  }, [id]);

  return (
    <div className="ms-5 d-flex flex-column">
      <h2 className="ms-2">Cardapio</h2>
      <div className="d-flex flex-row flex-wrap">
        {menu.length === 0 ? (
          <p> Não há cardapio cadastrado </p>
        ) : (
          menu.map((menu: MenuModel, index) => (
            <MenuItem
              key={index}
              name={menu.name}
              description={menu.description}
              price={menu.price}
              extras={menu.extras}
            />
          ))
        )}

        {/* <MenuItem
          name="Camarao internacional"
          description="camarao, ervilhas e muito mais"
          price={99.0}
          extras={['arroz', 'feijao']}
        />
        <MenuItem
          name="Camarao internacional"
          description="camarao, ervilhas e muito mais"
          price={99.0}
          extras={['arroz', 'feijao']}
        />
        <MenuItem
          name="Camarao internacional"
          description="camarao, ervilhas e muito mais"
          price={99.0}
          extras={['arroz', 'feijao']}
        />
        <MenuItem
          name="Camarao internacional"
          description="camarao, ervilhas e muito mais"
          price={99.0}
          extras={['arroz', 'feijao']}
        /> */}
      </div>
    </div>
  );
}
export default MenuList;
