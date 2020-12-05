import { useAuth } from 'components';
import React from 'react';
import { Redirect, Route, RouteChildrenProps, RouteComponentProps } from 'react-router';

type RouteProps = {
    component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
    render?: (props: RouteComponentProps<any>) => React.ReactNode;
    children?: ((props: RouteChildrenProps<any>) => React.ReactNode) | React.ReactNode;
    path?: string | string[];
    exact?: boolean;
    sensitive?: boolean;
    strict?: boolean;
}

const PrivateRoute: React.FC<RouteProps> = (route) => {
    const auth = useAuth();
    return <Route exact={route.exact}
        path={route.path}
        render={props => {
            if (!auth.isAuthenticated)
                return <Redirect to='/login' />;
            return React.createElement(route.component as any, props);
        }} />;
}
export default PrivateRoute;
