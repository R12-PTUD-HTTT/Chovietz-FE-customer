import SignUpPage from "../component/SignUp/SignUp";
import Cart from "../views/Cart/Cart";
import Checkout from "../views/Checkout/Checkout";
import NotFoundPage from "../views/Error/NotFoundPage";
import HomePage from "../views/HomePage";
import LoginPage from "../views/Login/LoginPage";
import ChangePass from "../views/ProfileManager/ChangePass";
import Profile from "../views/ProfileManager/Profile";

const routes = [
  {
    path: "/",
    component: () => <HomePage />,
    requireLogin: false,
  },
  {
    path: "/signup",
    component: () => <SignUpPage />,
    requireLogin: false,
  },
  {
    path: "/changepass",
    component: () => <ChangePass />,
    requireLogin: false,
  },
  {
    path: "/login",
    component: () => <LoginPage />,
    requireLogin: false,
  },
  {
    path: "/cart",
    component: () => <Cart />,
    requireLogin: true,
  },
  {
    path: "/profile",
    component: () => <Profile />,
    requireLogin: true,
  },
  {
    path: "/checkout",
    component: () => <Checkout />,
    requireLogin: true,
  },
  {
    path: "/",
    component: () => <NotFoundPage />,
    requireLogin: false,
    exact: false,
  },
];
export default routes;
