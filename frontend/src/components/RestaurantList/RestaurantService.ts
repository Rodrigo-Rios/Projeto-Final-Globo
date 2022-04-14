import env from '../../enviroments/env';
import axios from 'axios';
export default class RestaurantService {
  BASE_URL = env.BASE_URL;

  async getRestaurants() {
    const response = await fetch(`${this.BASE_URL}/restaurants`);
    const restaurants = await response.json();
    return restaurants;
  }

  async addMenu(restaurant_id: string, payload: any) {
    const response = await axios.post(`${this.BASE_URL}/restaurants/${restaurant_id}/menu`, { ...payload });
    return response;
  }
}
