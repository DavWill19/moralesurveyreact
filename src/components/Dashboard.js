import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { Col, FormGroup, Input, Jumbotron, Button } from 'reactstrap';
import 'animate.css';
import { LocalForm } from 'react-redux-form';
import { withRouter } from "react-router-dom";



class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            store: "no store selected",
            reportRan: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    };
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });

    }

    handleSubmit() {
        this.setState({reportRan: true});
        fetch('http://localhost:3000/feedback', {
            method: 'GET',
            headers: {
                credentials:  'same-origin',
                Accept: "application/json, text/plain, */*",
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + window.localStorage.getItem('token'),
                mode: 'no-cors',
            },
        })
            .then((result) => {
                return result.json();
            })
            .then((result) => {

                const report = result.filter(report => report.store === `${this.state.store}`)
                this.setState({ report: report })
                console.log('Get request was successful!', this.state.report);
            })
            .catch((err) => {
                console.error('An error happened', err);
            });

    }
    

    render() {
        return (
            <div>
                <Jumbotron className="text-center animate__animated animate__fadeIn">
                    <Col className="mx-auto" xs="10" lg="6"><img className="logo animate__animated animate__pulse animate__infinite infinite" alt="wendy" src="../images/wendysLogo.jpg" /></Col>
                    <h1 className="display-3 animate__animated animate__backInRight">Wenventure Inc</h1>
                    <p className="lead">
                        <hr className="display-3" />
                        <LocalForm onSubmit={this.handleSubmit}>
                            <FormGroup className="animate__animated animate__fadeIn logo mx-auto" tag="fieldset">
                                <h2>Select Location To View Report</h2>
                                <Col className="mx-auto" xs="5">
                                    <Input required onChange={this.handleChange} className="text-center" type="select" name="store" id="Select">
                                        <option value="" disabled selected>Location</option>
                                        <option name="store" value="Johnstown">Johnstown</option>
                                        <option name="store" value="Somerset">Somerset</option>
                                        <option name="store" value="Bedford">Bedford</option>
                                        <option name="store" value="Hollidaysburg">Hollidaysburg</option>
                                        <option name="store" value="Altoona-Plank Rd">Altoona-Plank Rd</option>
                                        <option name="store" value="Altoona-Cricketfield">Altoona-Cricketfield</option>
                                        <option name="store" value="Ebensburg">Ebensburg</option>
                                        <option name="store" value="Clarion">Clarion</option>
                                        <option name="store" value="Indiana">Indiana</option>
                                        <option name="store" value="Dubois">Dubois</option>
                                        <option name="store" value="St-Marys">St-Marys</option>
                                        <option name="store" value="Punxsutawney">Punxsutawney</option>
                                    </Input>
                                </Col>
                            </FormGroup>

                            <Button type="submit" className="animate__animated animate__fadeIn" color="primary">Get Report</Button>
                        </LocalForm>
                    </p>

                </Jumbotron>
                <div className="container">
                    <ReportResults report={this.state.report} />
                </div>
            </div>
        );

    }
}
function ReportResults(props) {
    if (props.report) {
        return (
            <div className="container">
            {props.report.map(report => (

                <div className="card" key={report.survey}>
                    <div className="card-body">
                        <h5 className="card-title">{report.store}</h5>
                        <p className="card-subtitle text-muted">{report.date}</p>
                        <h5 className="card-subtitle mb-2 text-center text-danger">{report.survey}</h5>
                        <p className="card-text">{report.question1}</p>
                        <p className="card-text">{report.question2}</p>
                        <p className="card-text">{report.question3}</p>
                        <p className="card-text">{report.question4}</p>
                        <p className="card-text">{report.question5}</p>
                        <p className="card-text">{report.question6}</p>
                        <p className="card-text">{report.question7}</p>
                        <p className="card-text">{report.question8}</p>
                        <p className="card-text"><b>Comments:</b> {report.comments}</p>
                        <p className="card-text"><b>Employee:</b> {report.name}</p>
                        <p className="card-text"><b>Contact:</b> {report.contact}</p>
                    </div>
                </div>)
                )}
            </div>
        )
    }
    else {
        return (
            null
        )
    }
}

export default withRouter(Dashboard);