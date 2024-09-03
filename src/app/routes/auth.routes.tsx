import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { LoginPage, SignupPage } from '../pages';

export const AuthRoutes: React.FC = () => {
    return (
        <Switch>
            <Route path={"/sign"} exact component={LoginPage} />
            <Route path={"/signup"} exact component={SignupPage} />
            <Route path={"*"} exact component={LoginPage} />
        </Switch>
    );
};
