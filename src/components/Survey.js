import React from 'react';
import { FormGroup, Label, Input, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import 'animate.css';
import QUESTIONS from '../questions/questions';
import { withRouter } from "react-router-dom";
import { LocalForm } from 'react-redux-form';
import emailjs from 'emailjs-com';
import config from '../config'


const api_key = config.API_KEY;
console.log(api_key)
const questions = QUESTIONS;

class Survey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: this.props.location.state.store,
      storeEmail: ""

    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  componentDidMount() {
    switch (this.state.location) {
      case 'Altoona-Plank Rd':
        this.setState({ storeEmail: "altoona23@wenventure-pa.com" })
        break;
      case 'Altoona-Cricketfield':
        this.setState({ storeEmail: "cricketfield40@wenventure-pa.com" })
        break;
      case 'Hollidaysburg':
        this.setState({ storeEmail: "hollidaysburg34@wenventure-pa.com" })
        break;
      case 'Bedford':
        this.setState({ storeEmail: "bedford36@wenventure-pa.com" })
        break;
      case 'Somerset':
        this.setState({ storeEmail: "somerset20@wenventure-pa.com" })
        break;
      case 'Johnstown':
        this.setState({ storeEmail: "johnstown25@wenventure-pa.com" })
        break;
      case 'Ebensburg':
        this.setState({ storeEmail: "ebensburg30@wenventure-pa.com" })
        break;
      case 'Clarion':
        this.setState({ storeEmail: "clarion37@wenventure-pa.com" })
        break;
      case 'St-Marys':
        this.setState({ storeEmail: "stmarys32@wenventure-pa.com" })
        break;
      case 'Indiana':
        this.setState({ storeEmail: "indiana22@wenventure-pa.com" })
        break;
      case 'Punxsutawney':
        this.setState({ storeEmail: "punxy31@wenventure-pa.com" })
        break;
      case 'Dubois':
        this.setState({ storeEmail: "dubois21@wenventure-pa.com" })
        break;
      default:
        return null
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
    JSON.stringify(this.state);
  }


  handleSubmit() {
    let answsers = false;
    for (let i = 0; i < questions.length; i++) {
      if (!this.state[`Question${questions[i].id}`]) {
        return alert('Please answer all questions');
      } else {
        answsers = true;
      }
    }
    if (answsers === true) {

      var templateParams = {
        storeEmail: this.state.storeEmail,
        survey: "Employee Morale Survey",
        date: `${new Date().toLocaleDateString()}`,
        store: `${this.state.location}`,
        name: `${this.state.name}`,
        contact: `${this.state.phoneEmail}`,
        comments: `${this.state.comments}`,
        question1: `${questions[0].question} ${this.state.Question0}`,
        question2: `${questions[1].question} ${this.state.Question1}`,
        question3: `${questions[2].question} ${this.state.Question2}`,
        question4: `${questions[3].question} ${this.state.Question3}`,
        question5: `${questions[4].question} ${this.state.Question4}`,
        question6: `${questions[5].question} ${this.state.Question5}`,
        question7: `${questions[6].question} ${this.state.Question6}`,
        question8: `${questions[7].question} ${this.state.Question7}`


      }
      this.props.history.push('/finish');

      emailjs.send('service_qtwvw1r', 'template_lsafe65', templateParams, api_key)
        .then(function (response) {
          console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
          console.log('FAILED...', error);
        });

      fetch('https://localhost:3000/feedback', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            mode: 'cors'
          },
          body: JSON.stringify(
            templateParams
          ),
        })
        .then((result) => {
          return result.json();
        })
        .then((form) => {
          console.log('Form created successfully!', form);
        })
        .catch((err) => {
          console.error('An error happened', err);
        });
    }
    this.props.history.push('/finish');
  }

  render() {
    return (
      <div className="container p-5 animate__animated animate__fadeIn">
        <header>
          <img className=" logo2 mx-auto d-block animate__animated animate__pulse animate__infinite infinite" alt="wendysLogo" src="../images/wendy.png" />
        </header>
        <LocalForm name='survey' className="text-center" onSubmit={this.handleSubmit} >
          {questions.map(q => <div>
            <Label required className="text-center form-group question">{q.question}</Label>
            <FormGroup check>
              <Label check className="p-1" >
                <Input type="radio" id={`Question${q.id}`} key={q.id} name={q.question} value="Highly Satisfied" className="mx-auto"
                  onChange={this.handleChange} />
                Highly Satisfied
              </Label>
              <Label check className="p-1">
                <Input type="radio" id={`Question${q.id}`} key={q.id} name={q.question} value="Satisfied" className="mx-auto"
                  onChange={this.handleChange}
                />
                Satisfied
              </Label>
              <Label check className="p-1">
                <Input type="radio" id={`Question${q.id}`} key={q.id} name={q.question} value="Somewhat Satisfied" className="mx-auto"
                  onChange={this.handleChange}
                />
                Somewhat Satisfied
              </Label>
              <Label check className="p-1">
                <Input type="radio" id={`Question${q.id}`} key={q.id} name={q.question} value="Dissatisfied" className="mx-auto"
                  onChange={this.handleChange}
                />
                Dissatisfied
              </Label>
              <Label check className="p-1">
                <Input type="radio" id={`Question${q.id}`} key={q.id} name={q.question} value="Highly Dissatisfied" className="mx-auto"
                  onChange={this.handleChange}
                />
                Highly Dissatisfied
              </Label>
            </FormGroup>
          </div>
          )}
          <FormGroup className="text-center" >
            <Label className="text-center form-group question">Comments</Label>
            <Input type="textarea" id="comments" name="comments" className="mx-auto text-center" placeholder="Leave us a comment"
              onChange={this.handleChange}
            />
          </FormGroup>
          <hr className="display-3" />
          <FormGroup className="text-center" >
            <Label className="text-center form-group leadership">Would you like to be contacted by a member of the senior leadership team?</Label>
            <FormGroup check>
              <Label check className="p-1" >
                <Input type="radio" id="contact" name="contact" value="yes" className="mx-auto"
                  onChange={this.handleChange}
                />
                Yes
              </Label>
              <Label check className="p-1">
                <Input type="radio" id="contact" name="contact" value="no" className="mx-auto"
                  onChange={this.handleChange}
                />
                No
              </Label>
            </FormGroup>
          </FormGroup>
          <ContactInfo handleChange={this.handleChange} visible={this.state.contact === 'yes'} />
          <div class="text-center">
            <Button className="animate__animated animate__fadeIn" color="danger" type="submit" >Submit</Button>
          </div>
        </LocalForm>

      </div>

    )

  }

}

function ContactInfo(props) {
  if (!props.visible) {
    return null;
  }

  return (
    <FormGroup className="mx-auto animate__animated animate__fadeIn text-center form-group question contact">
      <h5>Contact Information:</h5>
      <Input rows="1" type="textarea" id="name" name="name" placeholder="First and Last Name" className="mx-auto text-center contact"
        onChange={props.handleChange}
      />
      <Input rows="1" type="textarea" id="phoneEmail" name="phoneEmail" placeholder="Phone or Email" className="mx-auto text-center contact"
        onChange={props.handleChange}
      />
    </FormGroup>
  )
}



export default withRouter(Survey);