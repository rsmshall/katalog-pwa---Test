const assert = require('assert');

Feature('Liking Restaurants');
 
Before(({ I }) => {
  I.amOnPage('/#/favorites');
});
 
Scenario('showing empty liked restaurants', ({ I }) => {
  I.dontSeeElement('.restoran-item');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.dontSeeElement('.restoran-item');
 
  I.amOnPage('/');
  
  I.waitForElement('.restoran-item')
  I.seeElement('.restoran-item');
  const firstRestaurant = locate('.restoran-item').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  
  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.seeElement('.list-restoran');
  const likedRestaurantName = await I.grabTextFrom('.restoran-item');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unlike one restaurants', async ({ I }) => {
  I.dontSeeElement('.restoran-item');

  I.amOnPage('/');

  
  I.waitForElement('.restoran-item')
  I.seeElement('.restoran-item');
  const firstRestaurant = locate('.restoran-item').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.seeElement('.restoran-item');

  const likedRestaurantName = await I.grabTextFrom('.restoran-item');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.seeElement('.restoran-item');

  const firstRestaurantLiked = locate('.restoran-item').first();
  I.click(firstRestaurantLiked);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.dontSeeElement('.restoran-item');
});