/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react'
import { Header, Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './App.css';

// COMPONENTS
import PageHeader from './components/Header'
import Modal from './components/Modal'
import ContactsList from './components/ContactsList'
import Search from './components/Search'

// DATABASE
import { getContacts } from './dbService'

const App = () => {
  const [contactList, setContactList] = useState([])
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [searchForm, setSearchForm] = useState({
    dropDown: 'username',
    searchValue: ''
  })


  // Filter Functionality
  // Re-run if search value changes
  useEffect(() => {
    getContacts().on('value', onDataChange)
  }, [searchForm.searchValue])


  const onDataChange = (items) => {
    setLoading(true)
    const { dropDown, searchValue } = searchForm
    let contacts = [] 

    items.forEach((item) => {
      let key = item.key;
      let data = item.val();
      contacts.push({key, ...data})
    })

    contacts = contacts.filter(item => item[dropDown].toLowerCase().includes(searchValue.toLowerCase())) 
    setContactList(contacts)
    setLoading(false)
  }


  return (
    <Container>
      <PageHeader />
      <div style={{ display: 'flex', justifyContent: 'space-around'}}>
        <Search 
          searchForm={searchForm} 
          setSearchForm={setSearchForm} 
          float="right" 
          style={{ margin: '20px 0'}}
        />
        <Modal 
          contactList={contactList} 
          setContactList={setContactList} 
          addOrEdit="დამატება" 
          trigger 
          open={open} 
          setOpen={setOpen}
        />
      </div>
      <Header block dividing>კონტაქტების სია</Header>
      <Header.Content>
        <ContactsList loading={loading} contactList={contactList} setContactList={setContactList}/>
      </Header.Content>
    </Container>
  )
}

export default App;
