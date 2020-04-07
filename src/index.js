import React from 'react';
import Reactdom from 'react-dom';
import 'bootstrap';
import { Provider } from "react-redux";
import configureStore, { history } from  "./store";
import { ConnectedRouter } from 'connected-react-router'
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import EbillHomeComponent from "./components/ebillHomeComponent"
import LoginComponent from "./components/loginComponent";
import AdminDashComponent from "./components/adminDashComponent";
import ViewOrdersComponent from "./components/viewOrders";

const store = configureStore();
Reactdom.render(
    <Provider store={store}>
        <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
            <> { /* your usual react-router v4/v5 routing */ }
            <Router>
                <Switch>
                    <Route  exact path="/" component={EbillHomeComponent} />
                    <Route  path="/login" component={LoginComponent}  />
                    <Route  path="/admin" component={AdminDashComponent}  />
                    <Route  path="/vieworders" component={ViewOrdersComponent}  />
                    <Route  path="/about" render={() => (<div>Miss</div>)} />
                    <Route render={() => (<div>Not Found</div>)} />
                   
                </Switch>
            </Router>
            </>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
)


