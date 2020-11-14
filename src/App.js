import React from 'react'
import { Container, Tab } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './App.css';

// COMPONENTS
import PageHeader from './components/Header'
import ProductsForm from './utils/defaultForm'

const panes = [
  { menuItem: 'Tab 1', render: () => <Tab.Pane><ProductsForm title="First tab content"/></Tab.Pane> },
  { menuItem: 'Tab 2', render: () => <Tab.Pane><ProductsForm title="Second tab content"/></Tab.Pane> },
]

const App = () => (
  <Container>
    <PageHeader />
    <h1>Hello huys</h1>
    <Tab panes={panes} />
  </Container>
)

export default App;
