import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { Col, Jumbotron } from 'reactstrap';
import 'animate.css';


const Finish = () => {
    return (
        <div>
            <Jumbotron className="text-center animate__animated animate__fadeIn">
                <Col className="mx-auto" xs="10" lg="6"><img className="logo animate__animated animate__pulse animate__infinite infinite" alt="wendy" src="../images/wendysLogo.jpg" /></Col>
                <h1 className="display-3 animate__animated animate__backInRight">Wenventure Inc</h1>
                <hr className="display-3" />
                <h2 className="animate__animated animate__backInLeft" >Thank you for your feedback!</h2>
            </Jumbotron>
        </div>
    );
};

export default Finish;