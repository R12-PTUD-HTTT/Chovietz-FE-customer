import Cart from "../views/Cart/Cart";
import LoginPage from "../views/Login/LoginPage";

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
];
export default routes;
