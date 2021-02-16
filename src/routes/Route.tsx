import React from 'react';
import { FiInfo } from 'react-icons/fi';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';
import Layout from '../pages/_layouts/auth';
import NotFound from '../pages/NotFound';
import {
  CourseList,
  OpenDetails,
  OpenOnWeekends,
} from '../pages/NotFound/styles';
import { authRoutes } from './Routes/AuthRoutes';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
  requiredRoles?: string[];
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  requiredRoles,
  ...rest
}) => {
  const { user } = useAuth();

  console.log('userHasRequiredRole user', user);
  console.log('userHasRequiredRole 1', requiredRoles);

  let userHasRequiredRole = false;
  //const userHasRequiredRole = requiredRoles?.includes('admin');
  requiredRoles?.forEach((role) => {
    if (role === 'role-admin') userHasRequiredRole = true;
  });
  console.log('userHasRequiredRole', userHasRequiredRole);

  const myComponent = (location) => {
    //let pathname = authRoutes.home;

    console.log('location=>>> ', location);
    console.log('isPrivate==>>>', isPrivate);
    console.log('Entrei no if=============', userHasRequiredRole);
    if (isPrivate && !userHasRequiredRole) {
      console.log('<<<Entrei no if>>>', <Component />);
      console.log('<<<Entrei no if>>>', userHasRequiredRole);

      return <NotFound />;
    }

    return <Component />;
  };

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        document.querySelectorAll(' p * div ');

        return isPrivate === !!user ? (
          <>{myComponent(location)}</>
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? authRoutes.home : authRoutes.dashboard,
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
