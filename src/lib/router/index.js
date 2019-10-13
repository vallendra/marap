// @flow
import * as React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import FirstTimeLoader from 'components/FirstTimeLoader';

type RouteType = {
  path: string,
  exact: boolean,
  component: React.Node | ((props: any) => React.Node | React.Element<any>),
  wrapper: (props: any) => any,
  routes: ?(any[])
};

type RouterProps = {
  routes: RouteType[]
};

const generateUniqueKey = () => String((Math.random() * new Date()) / 2);

const history = createBrowserHistory();

const SubRoutes = ({
  path,
  exact,
  component,
  routes,
  wrapper
}: RouteType): React.Node => {
  if (!(routes && Array.isArray(routes) && routes.length)) {
    return React.createElement(Route, {
      path,
      key: generateUniqueKey(),
      exact,
      component: wrapper ? wrapper(component) : component
    });
  }

  return React.createElement(
    React.Fragment,
    { key: generateUniqueKey() },
    React.createElement(Route, {
      path,
      exact,
      component: wrapper ? wrapper(component) : component
    }),
    routes.map(subRoute => SubRoutes(subRoute))
  );
};

const MainRouter = ({ routes }: RouterProps): React.Node => {
  return (
    <Router history={history}>
      <React.Suspense fallback={<FirstTimeLoader />}>
        <>
          <Switch>{routes.map(SubRoutes)}</Switch>
        </>
      </React.Suspense>
    </Router>
  );
};

export default React.memo<any>(MainRouter);
