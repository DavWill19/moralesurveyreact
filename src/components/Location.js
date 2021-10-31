import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { Col, FormGroup, Input, Jumbotron, Button } from 'reactstrap';
import 'animate.css';
import { LocalForm } from 'react-redux-form';
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';



class Location extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            store: "no store selected",
            username: "",
            password: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleModalChange = this.handleModalChange.bind(this);
        this.handleModal = this.handleModal.bind(this);

    };
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });

    }
    handleModalChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });

    }

    handleSubmit() {
        this.props.history.push('/survey', { store: this.state.store });
    }

    handleModal() {

        fetch("http://localhost:3000/users/login", {
            method: "POST",
            headers: {
                credentials:  'same-origin',
                Accept: "application/json, text/plain, */*",
                'Content-Type': 'application/json',
                mode: "cors"
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            }),
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                let inMemoryToken = res.token;
                if (res.success) {
                    localStorage.setItem('token', res.token);
                    localStorage.setItem('user', JSON.stringify(res.user));
                    console.log(res);
                    this.props.history.push('/dashboard');
                } else {
                    alert("Invalid username or password");
                }
                console.log(inMemoryToken);
                // { Authorization: `Bearer  ${ inMemoryToken }`; }
                return inMemoryToken;
            })
            .catch(err => alert("Invalid username or password"));


        console.log(JSON.stringify(this.state));
    }


    render() {

        return (
            <div>
                <LoginModal handleModalChange={this.handleModalChange} handleModal={this.handleModal} />
                <Jumbotron className="text-center animate__animated animate__fadeIn">
                    <Col className="mx-auto" xs="10" lg="6"><img className="logo animate__animated animate__pulse animate__infinite infinite" alt="wendy" src="../images/wendysLogo.jpg" /></Col>
                    <h1 className="display-3 animate__animated animate__backInRight">Wenventure Inc</h1>
                    <hr className="display-3" />
                    <h2 className="animate__animated animate__backInLeft" >We want your feedback!</h2>
                    <p className="lead">
                        <hr className="display-3" />
                        <LocalForm onSubmit={this.handleSubmit}>
                            <FormGroup className="animate__animated animate__fadeIn" tag="fieldset">
                                <h2>Select Your Store</h2>
                                <Col className="mx-auto" xs="5">
                                    <Input required onChange={this.handleChange} className="text-center" type="select" name="store" id="Select">
                                        <option value="" disabled selected>My Location</option>
                                        <option name="Johnstown" value="Johnstown">Johnstown</option>
                                        <option name="Somerset" value="Somerset">Somerset</option>
                                        <option name="Bedford" value="Bedford">Bedford</option>
                                        <option name="Hollidaysburg" value="Hollidaysburg">Hollidaysburg</option>
                                        <option name="Altoona-Plank Rd" value="Altoona-Plank Rd">Altoona-Plank Rd</option>
                                        <option name="Altoona-Cricketfield" value="Altoona-Cricketfield">Altoona-Cricketfield</option>
                                        <option name="Ebensburg" value="Ebensburg">Ebensburg</option>
                                        <option name="Clarion" value="Clarion">Clarion</option>
                                        <option name="Indiana" value="Indiana">Indiana</option>
                                        <option name="Dubois" value="Dubois">Dubois</option>
                                        <option name="St-Marys" value="St-Marys">St-Marys</option>
                                        <option name="Punxsutawney" value="Punxsutawney">Punxsutawney</option>
                                    </Input>
                                </Col>
                            </FormGroup>

                            <Button type="submit" className="animate__animated animate__fadeIn" color="primary">Get Started</Button>
                        </LocalForm>
                    </p>
                    <p>(This survey takes less than 2 minutes to complete)</p>
                </Jumbotron>
            </div>
        );
    };
}
function LoginModal(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Link className="link d-flex justify-content-end p-2" onClick={handleShow}>Dashboard</Link>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Wenventure Portal</Modal.Title>
                </Modal.Header>
                <LocalForm name='login' className="text-center" onSubmit={props.handleModal} >
                    <FormGroup className="mx-auto animate__animated animate__fadeIn text-center form-group question contact">
                        <Input rows="1" type="text" id="username" name="username" placeholder="Username" className="mx-auto text-center contact"
                            onChange={props.handleModalChange}
                        />
                        <Input rows="1" type="password" id="password" name="password" placeholder="Password" className="mx-auto text-center contact"
                            onChange={props.handleModalChange}
                        />
                    </FormGroup>
                    <Modal.Footer>
                        <Button className="animate__animated animate__fadeIn" color="danger" type="submit" >Login</Button>
                    </Modal.Footer>
                </LocalForm>
            </Modal>
        </>
    );
}



export default withRouter(Location);