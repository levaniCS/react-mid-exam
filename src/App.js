import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './App.css';

const App = () => (
  <Router>
    <Container>
      <Route exact path="/" render={<h3>i will be in /</h3>}/>
      <Route exact path="/login" render={<h3>dddddddddddd</h3>}/>
    </Container>
  </Router>
)

export default App;
