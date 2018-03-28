import React, {Component} from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Badge, Button  } from 'reactstrap';
import axios from 'axios';

export default class Temp extends Component {
constructor(props) {
    super(props);
    this.state= {
      tickets: []
    }
  this.onClick = this.onClick.bind(this);
}

  onClick(e) {
    axios.post('http://104.131.15.9:3030/api/users/closeTicket')
    .then(function (response) {
      console.log(response)
    })
  }

  componentDidMount(e) {
    var self = this;
    axios.post('http://104.131.15.9:3030/api/users/getTickets')
    .then(function (response) {
      let tickets = response.data.array_to_json;
      self.setState({tickets: tickets});
    })
      .catch(function (error) {
        console.log(error)
      })
    };

 render () {

  var ticketList = this.state.tickets.map((obj) => {
  if (obj.status = 'closed') {
    return <ListGroupItem>
                      <ListGroupItemHeading>{obj.header}</ListGroupItemHeading>
                      <ListGroupItemText><Badge pill color='danger'>.</Badge>{obj.description}</ListGroupItemText>
                      </ListGroupItem>
  } else if (obj.status = 'open') {
    return <ListGroupItem>
                      <ListGroupItemHeading>{obj.header}</ListGroupItemHeading>
                      <ListGroupItemText><Badge pill color='success'>.</Badge>{obj.description}</ListGroupItemText>
                      <Button className="trash" onClick={this.onClick}>🗑️</Button>
                      </ListGroupItem>
  }

        });

  return (

      <div>

          <h1 className="dashboard"><b>Welcome to your Dashboard.</b></h1>
          <p/>
          <ListGroup>
          {ticketList}
          </ListGroup>
      </div>
    );
  };
}
