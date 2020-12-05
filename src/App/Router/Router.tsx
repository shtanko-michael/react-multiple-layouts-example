import Layout from '../Layouts/Layout';
import AuthLayout from '../Layouts/AuthLayout/AuthLayout';
import BasicLayout from '../Layouts/BasicLayout/BasicLayout';
import { PrivateRoute } from 'components';
import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from 'views/auth/Login/Login';
import Articles from 'views/articles/Articles/Articles';
import Article from 'views/articles/Article/Article';

const Router: React.FC = () => <BrowserRouter>
    <Switch>
        <Route path={['/login']} exact>
            <Layout layout={AuthLayout} isPublic={true}>
                <Route path={'/login'} exact component={() => <Login />} />
            </Layout>
        </Route>
        <Route path={['', '/articles', '/articles/:id']} exact>
            <Layout layout={BasicLayout} isPublic={true}>
                <PrivateRoute path={['', '/articles']} exact component={() => <Articles />} />
                <PrivateRoute path={'/articles/:id'} exact component={() => <Article />} />
            </Layout>
        </Route>
        <Route component={() => <div>404</div>}></Route>
    </Switch>
</BrowserRouter>;
export default Router;