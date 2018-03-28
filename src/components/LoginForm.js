import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Container, Form, FormGroup, Label, Input, InputGroup, InputGroupText, InputGroupAddon, FormText, Row } from 'reactstrap';
import { browserHistory } from 'react-router-dom';
import { login } from '../actions/login';
import { connect } from 'react-redux';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state= {
      first_name: '',
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
    this.props.login(this.state).then(
      () => {
        this.props.history.push('/Dashboard');
      })
  }

render() {

  return (
      <Form onSubmit={this.onSubmit}>
      <FormGroup row>
        <Label for="name" sm={2}>👤</Label>
        <Col sm={10}>
          <Input
            type="text"
            name="first_name"
            value={this.state.first_name}
            placeholder=" first name"
            onChange={this.onChange}
            required />
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
         <Button className="cool-button">Submit</Button>
        </FormGroup>
      </Form>

    );
  };
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
}

export default connect(null, { login })(LoginForm);
