////////////////////////////////////////////////
//////////////*~ Dependencies ~*////////////////
////////////////////////////////////////////////

import React, { PropTypes, Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
var reactMixin = require('react-mixin');

////////////////////////////////////////////////
/////////////*~ Other Components ~*/////////////
////////////////////////////////////////////////

import Home from '../Home';
import Page1 from '../Page1';
import Page2 from '../Page2';

////////////////////////////////////////////////
////////////////*~ Component ~*/////////////////
////////////////////////////////////////////////

const routes = (
  <Route path="/" component={Home}>
    <Route path="/page1" component={Page1} />
    <Route path="/page2" component={Page2} />
  </Route>
)


class App extends Component {
  constructor(){
    super();
    this.state =  {
      orders: ""
    };
  }

  // bind Firebase ref to component
  componentDidMount(){

    var ref = firebase.database().ref("orders/");
    this.bindAsArray(ref, "orders");
  }

  // router determines which components to load
  render(){
    return (
      <Router history={browserHistory}>
        { routes }
      </Router>
    )
  }
}

// React Fire Mixin that makes it easier
// to bind Firebase to React component
reactMixin(App.prototype, ReactFireMixin);

module.exports = App;
