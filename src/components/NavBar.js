import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import App from './App';
import Home from './Welcome';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import Temp from './Temp'

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Router>
      <div style={{height: '100%'}}>
        <Navbar id="nav" light expand="md">
          <NavbarBrand href="/">rachel_profiling</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/Login">Log in</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Register">Sign up</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <Route exact path="/" component={Home}/>
        <Route exact path="/Register" component={Register}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Dashboard" component={Dashboard}/>
        <Route exact path="/Temp" component={Temp}/>

      </div>
      </Router>
    );
  }
}