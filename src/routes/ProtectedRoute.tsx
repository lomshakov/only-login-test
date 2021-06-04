import React from "react";
import {Redirect, Route, RouteProps} from "react-router-dom";
import useAuth from "../hooks/useAuth";

interface ProtectedRouteProps extends RouteProps {}

interface Props {
    layout: React.FC;
    component: React.FC;
}

const ProtectedRoute:React.FC<ProtectedRouteProps & Props> = ({ component: Component, layout: Layout, ...rest }) => {
    const auth = useAuth();
    if (auth?.user === null) return <Redirect to="/login" />

    return (
        <Route {...rest} render={(props) =>
            <Layout {...props}>
                <Component {...props} />
            </Layout>
        }
        />
    );
};

export default ProtectedRoute;