import React, {Component} from 'react';
import RegistrationForm from './RegistrationForm';
import { Button, Card, CardText, CardBody, CardTitle } from 'reactstrap';
import { connect } from 'react-redux';
import { userSignupRequest } from '../actions/signupActions';
import PropTypes from 'prop-types';

class Register extends Component {

render() {

  const { userSignupRequest } = this.props;

  return (
      <div className="bg">

          <h1 className="reg-head"><b>Welcome.</b></h1>

          <p>
            <div>
            <Card>
              <CardBody>
                <CardTitle>register</CardTitle>
                <CardText>
                  <RegistrationForm userSignupRequest={userSignupRequest} />
                </CardText>
              </CardBody>
            </Card>
          </div>
          </p>
      </div>
    );
  };
}

Register.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest })(Register);