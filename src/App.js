import React, { useState } from 'react'
import { Header, Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './App.css';

// COMPONENTS
import PageHeader from './components/Header'
import Modal from './components/Modal'
import ContactsList from './components/ContactsList'
import Search from './components/Search'


const App = () => {
  const [open, setOpen] = useState(false)
  return (
    <Container>
      <PageHeader />
      <div style={{ display: 'flex', justifyContent: 'space-around'}}>
        <Search float="right" style={{ margin: '20px 0'}} />
        <Modal addOrEdit="დამატება" trigger open={open} setOpen={setOpen} />
      </div>
      <Header block dividing>კონტაქტების სია</Header>
      <Header.Content>
        <ContactsList />
      </Header.Content>
    </Container>
  )
}

export default App;
