import React, {Component} from 'react';
import LoginForm from './LoginForm';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';



class Login extends Component {
  render() {

  return (
      <div className="bg">
          <h1 className="reg-head"><b>Welcome.</b></h1>
            <p>
            <div>
            <Card style={{height: "250px"}}>
              <CardBody>
                <CardTitle>log in</CardTitle>
                <CardText>
                  <LoginForm />
                </CardText>
              </CardBody>
            </Card>
          </div>
          </p>
      </div>
    );
  }
}

export default Login;
