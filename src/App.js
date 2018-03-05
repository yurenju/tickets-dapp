import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from 'reactstrap';

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Register from './components/Register';
import Refund from './components/Refund';
import Admin from './components/Admin';

class App extends Component {
  render() {
    return (
      <Router basename="/tickets">
        <div className="App">
          <Header />
          <Container className="py-3">
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/refund" component={Refund} />
            <Route path="/admin" component={Admin} />
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
