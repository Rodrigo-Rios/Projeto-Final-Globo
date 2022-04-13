import env from '../../enviroments/env';

export default class MenuService {
  BASE_URL = env.BASE_URL;

  async getMenu(idRestaurant: number) {
    const response = await fetch(`${this.BASE_URL}/restaurants/${idRestaurant}/menu`);
    const menu = await response.json();
    return menu.menu;
  }
}
