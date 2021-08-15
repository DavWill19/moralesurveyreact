import React from 'react';
import { FormGroup, Label, Input, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'
import '../App.css'
import QUESTIONS from '../questions/questions'
import { withRouter } from "react-router-dom";
import { LocalForm } from 'react-redux-form';
import Finish from './Finish'


const questions = QUESTIONS;

class Survey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer0: "",
      answer1: "",
      answer2: "",
      answer3: "",
      answer4: "",
      answer5: "",
      answer6: "",
      answer7: "",
      answer8: ""


    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  };
  handleChange(e) {
    this.setState({
      selectedOption: e.target.value
    });

  }

  handleSubmit(e) {
    console.log('test' + JSON.stringify(this.state.selectedOption));
    this.props.history.push('/finish');
  }

  render() {
    return (
      <>
        <header>
          <img className=" logo2 mx-auto d-block" alt="wendysLogo" src="../images/wendy.png" />
        </header>
        <LocalForm className="text-center" onSubmit={this.handleSubmit} >
          {questions.map(q => <div>
            <Label className="text-center form-group question">{q.question}</Label>
            <FormGroup check>
              <Label check className="p-1" >
                <Input type="radio" name={q.id} value="Highly Satisfied" className="mx-auto"
                  checked={this.state.selectedOption === "Highly Satisfied"}
                  onChange={this.handleChange} />
                Highly Satisfied
              </Label>
              <Label check className="p-1">
                <Input type="radio" name={q.id} value="Satisfied" className="mx-auto"
                  checked={this.state.selectedOption === "Satisfied"}
                  onChange={this.handleChange}
                />
                Satisfied
              </Label>
              <Label check className="p-1">
                <Input type="radio" name={q.id} value="Somewhat Satisfied" className="mx-auto"
                  checked={this.state.selectedOption === "Somewhat Satisfied"}
                  onChange={this.handleChange}
                />
                Somewhat
              </Label>
              <Label check className="p-1">
                <Input type="radio" name={q.id} value="Dissatisfied" className="mx-auto"
                  checked={this.state.selectedOption === "Dissatisfied"}
                  onChange={this.handleChange}
                />
                Dissatisfied
              </Label>
              <Label check className="p-1">
                <Input type="radio" name={q.id} value="Highly Dissatisfied" className="mx-auto"
                  checked={this.state.selectedOption === "Highly Dissatisfied"}
                  onChange={this.handleChange}
                />
                Highly Dissatisfied
              </Label>
            </FormGroup>
          </div>
          )}

          <hr className="display-3" />
          <FormGroup className="text-center" >
            <Label className="text-center">Would you like to be contacted by a member of the senior leadership team?</Label>
            <FormGroup check>
              <Label check className="p-1" >
                <Input type="radio" name="contact" value="yes" className="mx-auto" />{' '}
                Yes
              </Label>
              <Label check className="p-1">
                <Input type="radio" name="contact" value="no" className="mx-auto" />{' '}
                No
              </Label>
            </FormGroup>
          </FormGroup>

          <div class="text-center">
            <Button className="animate__animated animate__fadeIn" color="danger" type="submit" >Submit</Button>
          </div>
        </LocalForm>
      </>

    )
  }
}

export default withRouter (Survey);