import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import axios from 'axios';

export default class Dashboard extends Component {
constructor(props) {
    super(props);
    this.state= {
      people: []
    }

}

  componentDidMount(e) {
    var self = this;
    axios.get('https://reqres.in/api/users?page=2')
    .then(function (response) {
      let fetchedUsers = response.data.data;
      self.setState({people: fetchedUsers});
    })
      .catch(function (error) {
        console.log(error)
      })
    };

 render () {

      var userList = this.state.people.map((obj) => {

                return <ListGroupItem className="person">
                      <img src={obj.avatar} className="circle"/>
                      <span className="name">{obj.first_name} {obj.last_name}</span>
                      </ListGroupItem>
        });

  return (

      <div>

          <h1 className="dashboard"><b>Welcome to the Admin Dashboard.</b></h1>
          <p/>
          <ListGroup>
          {userList}
          </ListGroup>
      </div>
    );
  };
}
