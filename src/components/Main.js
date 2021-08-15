import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
import Survey from './Survey';
import Location from './Location'
import Finish from './Finish'
//import { connect } from 'react-redux';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurant: "Wendy's",
            name: "",
            answer1: "",
            answer2: "",
            answer3: "",
            answer4: "",
            answer5: "",
            answer6: "",
            answer7: "",
            answer8: "",
            contact: false,
            message: ""
        };
    }
    render() {

        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Location />
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