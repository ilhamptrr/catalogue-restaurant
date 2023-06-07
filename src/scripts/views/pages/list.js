import restaurantSource from '../../data/restaurant-source';
import { createRestaurantsItemTemplate } from '../templates/template-creator';

const List = {
  async render() {
    return `
        <section class="content">
          <div class="latest">
              <h1>Explore Restaurant</h1>
              <div class="list" id="tes"></div>
          </div>
        </section>
    `;
  },

  async afterRender() {
    const restaurant = await restaurantSource.listRestaurans();
    const restaurantContainer = document.querySelector('#tes');
    restaurant.forEach((restaurants) => {
      restaurantContainer.innerHTML += createRestaurantsItemTemplate(restaurants);
    });
  },
};

export default List;
