import React from 'react'
import { Jumbotron, Button, Card, CardImg, CardText, CardHeader, CardFooter, CardBody, CardTitle, CardSubtitle, Col, Container, Form, FormGroup, Label, Input, InputGroup, InputGroupText, InputGroupAddon, FormText, Row } from 'reactstrap';

function  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

      this.setState({
        [name]: value
      });
    }

const Login = (props) => {
  return (
      <div className="bg">

          <h1 className="reg-head"><b>Welcome.</b></h1>

          <p>
            <div>
            <Card style={{height: "250px"}}>
              <CardBody>
                <CardTitle>log in</CardTitle>
                <CardText>
                  <Form>
                  <FormGroup row>
                    <Label for="name" sm={2}>👤</Label>
                    <Col sm={10}>
                      <Input type="text" name="name" id="name" placeholder=" first name" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="password" sm={2}>🔑</Label>
                    <Col sm={10}>
                      <Input type="password" name="password" id="examplePassword" placeholder="password" />
                    </Col>
                  </FormGroup>
                  </Form>

                </CardText>
                <Button className="cool-button">Submit</Button>
              </CardBody>
            </Card>
          </div>
          </p>
      </div>
    );
};

export default Login;
