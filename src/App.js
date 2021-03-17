import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { Button, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'


import Header from './components/Header'
import India from './components/India'
import World from './components/world'



function App() {
  return (


    <div className="container-fluid">

      <Router>

        <div className="row">

          <div className="col-md-12 fixed-top">
            <Header />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12" style={{ paddingTop: "55px" }}>
            <Switch>

              <Route exact path="/" ><India/></Route>
              <Route path="/india"><India /></Route>
              <Route path="/world"><World /></Route>

            </Switch>
          </div>

        </div>

      </Router>

    </div>
  );
}
{/* <div className="row">
  <div className="col-md-12">
    <Header />
  </div>
  <div className="col-md-12">
    <Switch>
      <Route exact path="/"> <India /> </Route>
      <Route path="/india"><India /></Route>
      <Route path="/world"><World /></Route>
    </Switch>
  </div>
</div> */}

export default App;
