import SignUpPage from '../component/SignUp/SignUp';
import Cart from '../views/Cart/Cart';
import NotFoundPage from '../views/Error/NotFoundPage';
import HomePage from '../views/HomePage';
import LoginPage from '../views/Login/LoginPage';
import ChangePass from '../views/ProfileManager/ChangePass';
import Profile from '../views/ProfileManager/Profile';
import SearchPage from '../views/Search/SearchPage';

const routes = [
  {
    path: '/',
    component: () => <HomePage />,
    requireLogin: false,
  },
  {
    path: '/signup',
    component: () => <SignUpPage />,
    requireLogin: false,
  },
  {
    path: '/changepass',
    component: () => <ChangePass />,
    requireLogin: false,
  },
  {
    path: '/login',
    component: () => <LoginPage />,
    requireLogin: false,
  },
  {
    path: '/cart',
    component: () => <Cart />,
    requireLogin: false,
  },
  {
    path: '/Search',
    component: () => <SearchPage />,
    requireLogin: false,
  },
  {
    path: '/profile',
    component: () => <Profile />,
    requireLogin: false,
  },
  {
    path: '/',
    component: () => <NotFoundPage />,
    requireLogin: false,
    exact: false,
  },
];
export default routes;
