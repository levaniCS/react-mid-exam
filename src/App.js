import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './App.css';

const App = () => (
  <Router>
    <Container>
      <h1>Hello huys</h1>
    </Container>
  </Router>
)

export default App;
