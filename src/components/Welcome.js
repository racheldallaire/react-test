import React from 'react'
import { Jumbotron, Button } from 'reactstrap';

const Home = (props) => {
  return (
      <div className="bg">

          <h1 className="bg-head"><b>Welcome.</b></h1>

          <p>
            <Button className="home-button" color="secondary" href="/register">Get Started</Button>
          </p>
      </div>
    );
};

export default Home;
