import env from '../../enviroments/env';

export default class RestaurantService {
  BASE_URL = env.BASE_URL;

  async getRestaurants() {
    const response = await fetch(`${this.BASE_URL}/restaurants`);
    const restaurants = await response.json();
    return restaurants;
  }
}
