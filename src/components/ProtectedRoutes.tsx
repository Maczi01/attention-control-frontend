import { Redirect, Route, RouteProps } from 'react-router';
import {useAuth} from "../auth/Auth";
import React from "react";
// @ts-ignore
const PrivateRoute: React.FC<RouteProps> = ({
                                                 component: Component,
                                                 ...rest
                                             }: {
    component: React.ComponentType<RouteProps>;
}) => {
    const auth = useAuth()
    // @ts-ignore
    return (
        <Route
            {...rest}
            render={props =>
                // @ts-ignore
                auth.user !== null
                    // @ts-ignore
                    ? <Component {...props} />
                    : <Redirect to="/login"/>
            }
        />
    );
}

export default PrivateRoute;
