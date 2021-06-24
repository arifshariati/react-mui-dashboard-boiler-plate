import React from 'react';
import { Route, Redirect } from 'react-router-dom';
const PrivateRouteWithLayout = ({
    layout: Layout,
    component: Component,
    roles,
    ...rest
}) => {
    return(
        <Route 
            {...rest}
            render = {props => {
                if(!localStorage.getItem('userId')) {
                    // not logged in so redirect to login page with the return url
                    return <Redirect to={{ pathname: '/login', state: { from: props.location }}} />
                }
                // logged in  so return component
                return (
                    <Layout>
                        <Component {...props} />
                    </Layout>
                )
            }}
        />
    )
}
export default PrivateRouteWithLayout;