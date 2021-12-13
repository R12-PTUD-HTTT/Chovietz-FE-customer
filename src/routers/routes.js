import LoginPage from "../views/Login/LoginPage";

const routes = [
  {
    path: "/login",
    component: () => <LoginPage />,
    role: ["customer"],
  },
];
export default routes;
