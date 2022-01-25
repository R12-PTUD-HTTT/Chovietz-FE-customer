import SignUpCustomer from '../views/SignUp/SignUpCustomer';
import SignUpPage from '../component/SignUp/SignUp';
import Cart from '../views/Cart/Cart';
import Checkout from '../views/Checkout/Checkout';
import NotFoundPage from '../views/Error/NotFoundPage';
import HomePage from '../views/HomePage';
import LoginPage from '../views/Login/LoginPage';
import ChangePass from '../views/ProfileManager/ChangePass';
import Profile from '../views/ProfileManager/Profile';
import SearchPage from '../views/SearchPage/SearchPage';
import ProductDetail from '../views/ProductPage/ProductDetail';
import ProductPage from '../views/ProductPage/Product';
import Rate from '../views/Rate/Rate';
import OrderTracking from '../views/OrderTracking/OrderTracking';

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
    path: '/signup-customer',
    component: () => <SignUpCustomer />,
    requireLogin: false,
  },
  {
    path: '/changepass',
    component: () => <ChangePass />,
    requireLogin: true,
  },
  {
    path: '/login',
    component: () => <LoginPage />,
    requireLogin: false,
  },
  {
    path: '/cart',
    component: () => <Cart />,
    requireLogin: true,
  },
  {
    path: '/profile',
    component: () => <Profile />,
    requireLogin: true,
  },
  {
    path: '/checkout',
    component: () => <Checkout />,
    requireLogin: true,
  },
  {
    path: '/tracking',
    component: () => <OrderTracking />,
    requireLogin: true,
  },
  {
    path: '/products',
    component: () => <ProductPage />,
    requireLogin: false,
  },
  {
    path: '/product/search/:key',
    component: () => <SearchPage />,
    requireLogin: false,
  },
  {
    path: '/products/detail/:key',
    component: () => <ProductDetail />,
    requireLogin: false,
  },
  {
    path: '/products/rating',
    component: () => <Rate />,
    requireLogin: true,
  },
  {
    path: '/',
    component: () => <NotFoundPage />,
    requireLogin: false,
    exact: false,
  },
];
export default routes;
