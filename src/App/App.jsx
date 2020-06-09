import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import {alertActions, userActions} from '../_actions';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import {Home} from "../Home";
import Navbar from "../_components/Navbar";
import {Cart} from "../Cart";
import {ProductRegister} from "../ProductRegister";
import {authentication} from "../_reducers/authentication.reducer";

class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            this.props.clearAlerts();
        });
    }

    render() {
        const { alert } = this.props;

        return (
            <Router history={history}>
                <Navbar s/>
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }

                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
                                <Route path="/cart" component={Cart} />
                                <Route path="/product" component={ProductRegister}/>
                                <Redirect from="*" to="/" />
                            </Switch>


                    </div>
                </div>


            </div>

            </Router>
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear,

};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };