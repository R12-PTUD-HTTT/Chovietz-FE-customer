import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import RouterWrapper from "./routers/RouterWrapper";
import routes from "./routers/routes";
import NotFoundPage from "./views/Error/NotFoundPage";
import { reloadUserStore } from "./redux/actions/userAction";
function renderRoute(routes) {
  return routes.map((route, index) => {
    return (
      <RouterWrapper
        key={index}
        path={route.path}
        component={route.component}
        requireLogin={route.requireLogin}
        exact={route.exact === undefined ? true : route.exact}
      />
    );
  });
}

function App() {
  const dispatch = useDispatch();
  dispatch(reloadUserStore());
  return (
    <Router>
      <Switch>
        {renderRoute(routes)}
        <Route path="/" component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
