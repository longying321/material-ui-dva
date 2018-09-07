import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import indexRoutes from "./routes/index.js";
//添加路由信息

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return <Route path={prop.path} component={prop.component} key={key} />;
        })}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
