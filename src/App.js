import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListProtocolComponent from './components/ListProtocolComponent';
//import HeaderComponent from './components/HeaderComponent';
//import FooterComponent from './components/FooterComponent';
import CreateProtocolComponent from './components/CreateProtocolComponent';
import ViewProtocolComponent from './components/ViewProtocolComponent';

function App() {
  return (
    <div>
        <Router>
              {/*<HeaderComponent />*/}
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListProtocolComponent}></Route>
                          <Route path = "/protocols" component = {ListProtocolComponent}></Route>
                          <Route path = "/add-protocol/:id" component = {CreateProtocolComponent}></Route>
                          <Route path = "/view-Protocol/:id" component = {ViewProtocolComponent}></Route>
                          {/* <Route path = "/update-Protocolo/:id" component = {UpdateProtocoloComponent}></Route> */}
                    </Switch>
                </div>
              {/*<FooterComponent />*/}
        </Router>
    </div>
    
  );
}

export default App;