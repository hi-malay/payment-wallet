import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';


import PrivateRoute from './PrivateRoute';

import Newwallets from "../Newwallets/Newwallets";
import Allwallets from "../Allwallets/Allwallets";
import Checkbalance from "../Checkbalance/Checkbalance";
import Spendfunds from "../Spendfunds/Spendfunds";
import Addfunds from "../Addfunds/Addfunds";
import Alltrans from "../Alltrans/Alltrans";
import Login from "../Login/Login";
class CustomRouter extends React.Component<any, {

    isRedirect: boolean,

}> {
    constructor(props: any) {
        super(props)
        this.state = {

            isRedirect: false,//Make this true id you want to redirect to cleartax page
        }
    }
    render() {
        return (
            <Router basename="/main">
                <Switch>
                    <Route exact path="/" render={() => <Redirect to={{
                        pathname: `/login`,
                    }} />} />
                    <PrivateRoute path="/all-wallet" component={Allwallets} />
                    <PrivateRoute path="/new-wallet" component={Newwallets} />
                    <PrivateRoute path="/check-balance" component={Checkbalance} />
                    <PrivateRoute path="/add-funds" component={Addfunds} />
                    <PrivateRoute path="/spend-funds" component={Spendfunds} />
                    <PrivateRoute path="/all-trans" component={Alltrans} />
                    <Route path="/login" component={Login} />
                </Switch>
            </Router>
        );
    }
}
export default CustomRouter;

