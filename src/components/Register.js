import React, {Component} from 'react';
import axios from 'axios';
import { Jumbotron, Button, Card, CardImg, CardText, CardHeader, CardFooter, CardBody, CardTitle, CardSubtitle, Col, Container, Form, FormGroup, Label, Input, InputGroup, InputGroupText, InputGroupAddon, FormText, Row } from 'reactstrap';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state= {
      first_name: '',
      last_name: '',
      role: '',
      password: ''
    }
  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
}

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

render() {

  return (
      <div className="bg">

          <h1 className="reg-head"><b>Welcome.</b></h1>

          <p>
            <div>
            <Card>
              <CardBody>
                <CardTitle>register</CardTitle>
                <CardText>
                  <Form onSubmit={this.onSubmit}>
                  <FormGroup row>
                    <Label for="name" sm={2}>👤</Label>
                    <Col sm={5} className="left">
                      <Input
                        type="text"
                        name="first_name"
                        value={this.state.first_name}
                        placeholder=" first name"
                        onChange={this.onChange}
                        required />
                    </Col>
                    <Col sm={5} className="right">
                      <Input
                        type="text"
                        name="last_name"
                        value={this.state.last_name}
                        placeholder="last name"
                        onChange={this.onChange}
                        required />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="role" sm={2}>💼</Label>
                    <Col sm={10}>
                      <Input
                        type="select"
                        name="role"
                        value={this.state.role}
                        onChange={this.onChange}
                        required>
                        <option value="" selected disabled>select role</option>
                        <option>regular</option>
                        <option>admin</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="password" sm={2}>🔑</Label>
                    <Col sm={10}>
                      <Input
                        type="password"
                        name="password"
                        value={this.state.password}
                        placeholder="password"
                        onChange={this.onChange}
                        required />
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                     <Button className="cool-button">Submit</Button>
                    </FormGroup>
                  </Form>
                </CardText>
              </CardBody>
            </Card>
          </div>
          </p>
      </div>
    );
  };
}
