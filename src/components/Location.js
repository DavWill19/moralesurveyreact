import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { Col, FormGroup, Input, Jumbotron, Button } from 'reactstrap';
import 'animate.css';
import { Link } from "react-router-dom";  


const Location = () => {
    return (
        <div>
            <Jumbotron className="text-center animate__animated animate__fadeIn">
                <Col className="mx-auto" xs="10" lg="6"><img className="logo animate__animated animate__pulse animate__infinite infinite" alt="wendy" src="../images/wendysLogo.jpg" /></Col>
                <h1 className="display-3 animate__animated animate__backInRight">Wenventure Inc</h1>
                <hr className="display-3" />
                <h2 className="animate__animated animate__backInLeft" >We want your feedback!</h2>
                <p className="lead">
                    <hr className="display-3" />
                    <FormGroup className="animate__animated animate__fadeIn" tag="fieldset">
                        <Col className="mx-auto" xs="5">
                            <Input className="text-center" type="select" name="select" id="exampleSelect">
                                <option value="" disabled selected>Select your store</option>
                                <option value="Johnstown">Johnstown</option>
                                <option value="Somerset">Somerset</option>
                                <option value="">Bedford</option>
                                <option value="Bedford">Hollidaysburg</option>
                                <option value="Altoona-Plank Rd">Altoona-Plank Rd</option>
                                <option value="Altoona-Cricketfield">Altoona-Cricketfield</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <Link to="/survey"><Button className="animate__animated animate__fadeIn" color="primary">Get Started</Button></Link>
                </p>
                <p>(This survey takes less than 2 minutes to complete)</p>
            </Jumbotron>
        </div>
    );
};

export default Location;