import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <div class="banner">
          <div class="banner__inner">
            <h2 class="banner__title">Mommy Kitchen</h2>
            <h3> 🍽️Find the best restaurant in all of Indonesia👩‍🍳</h3>
            </div>
        </div>
  
        <main id="main" tabindex="0">
          <section class="content">
            <h2 class="list-restoran__label">
              Explorer Restaurant
            </h2>
            <div class="list-restoran"></div>
          </section>
        </main>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.restaurantList();
    const restaurantsContainer = document.querySelector('.list-restoran');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
