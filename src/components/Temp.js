import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import axios from 'axios';

export default class Temp extends Component {
constructor(props) {
    super(props);
    this.state= {
      tickets: []
    }

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

                return <ListGroupItem className="person">
                      <span className="name">{obj.header}</span>
                      <span>{obj.description} {obj.status}</span>
                      </ListGroupItem>
        });

  return (

      <div>

          <h1><b>Welcome to your Dashboard.</b></h1>
          <p/>
          <ListGroup>
          {ticketList}
          </ListGroup>
      </div>
    );
  };
}
