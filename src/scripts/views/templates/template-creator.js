import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createrestaurantsDetailTemplate = (restaurant) => `
  <h1 class="restaurants__name">${restaurant.name}</h1>
  
  <div class="detail__content">
    <div class="detail__info">
      <img class="restaurants__image lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />

      <div>
        <h2>Address</h2>
        <p>${restaurant.address}</p>
      </div>

      <div>
        <h2>City</h2>
        <p>${restaurant.city}</p>
      </div>

      <div class="detail__description">
        <h2>Description</h2>
        <p>${restaurant.description}</p>
      </div>

      <div class="menu">
        <div class="menuMakanan">
          <h2>Menu Makanan</h2>
          <ul>
            ${restaurant.menus.foods.map((foods) => `<li class="poin">${foods.name}</li>`).join('')}
          </ul>
        </div>

        <div class="menuMinuman">
          <h2>Menu Minuman</h2>
          <ul>
            ${restaurant.menus.drinks.map((drinks) => `<li class="poin">${drinks.name}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>

    <div class="spasi"></div>

    <aside>
      <div class="customerReviews">
        <h2>Customer Reviews</h2>
        ${restaurant.customerReviews.map((review) => `
          <div class="review">
            <div class="review_flex">
              <h3 class="review__name">${review.name}</h3>
              <p class="review__date">${review.date}</p>
            </div>
            <p class="review__text">${review.review}</p>
          </div>
        `).join('')}
      </div>
    </aside>
  </div>

  
`;

const createRestaurantsItemTemplate = (restaurants) => `
      <div class="card">
          <img class="card_thumb lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="${restaurants.name}" title="${restaurants.name}">
          <div class="card_content">
            <h2 class="card_title"><a href="/#/detail/${restaurants.id}">${restaurants.name}</a></h2>
            <ul class="card_item_city_rating">
              <li class="card_item_city">${restaurants.city}</li>
              <li>| Rating :</li>
              <li class="card_item_rating">${restaurants.rating}</li>
            </ul>
            <div class="card_desc">${restaurants.description ? restaurants.description.slice(0, 150) : ''}...</div>
          </div>
      </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantsItemTemplate,
  createrestaurantsDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
