import Cart from "../views/Cart/Cart";
import LoginPage from "../views/Login/LoginPage";
import Profile from "../views/ProfileManager/Profile";

const routes = [
  {
    path: "/login",
    component: () => <LoginPage />,
    role: ["customer"],
  },
  {
    path: "/cart",
    component: () => <Cart />,
    role: ["customer"],
  },
  {
    path: "/profile",
    component: () =>  <Profile />,
    role: ["customer"],
  },
];
export default routes;
