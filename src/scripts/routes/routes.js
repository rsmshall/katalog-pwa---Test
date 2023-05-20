import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Favorites from '../views/pages/favorites';

const routes = {
  '/': Home, // default page,
  Home,
  '/detail/:id': Detail,
  '/favorites': Favorites,

};

export default routes;
