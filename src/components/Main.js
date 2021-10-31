import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
import Survey from './Survey';
import Location from './Location'
import Finish from './Finish'
import Dashboard from './Dashboard'


class Main extends Component {

    render() {

        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Location />
                        </Route>
                        <Route exact path="/dashboard">
                            <Dashboard />
                        </Route>
                        <Route exact path="/survey">
                            <Survey />
                        </Route>
                        <Route exact path="/finish">
                            <Finish />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Main;