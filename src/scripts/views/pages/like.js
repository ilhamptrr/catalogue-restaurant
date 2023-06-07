import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantsItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `

      <section class="content">
          <div class="latest">
              <h1>Your Favorite Restaurants</h1>
              <div class="list" id="tes"></div>
          </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#tes');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantsItemTemplate(restaurant);
    });
  },
};

export default Like;
