/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { List } from 'semantic-ui-react'
import ContactsListItem  from './ContactsListItem'

const ListItemsFloated = ({contactList, setContactList}) => {
  


  const renderContactsList = () => {
    if(contactList.length) {
      return contactList.map(item => <ContactsListItem setContactList={setContactList} contactList={contactList}  key={item.id} item={item} />)
    }
    return <p>კონტაქტები ცარიელია</p>
  }
  return (
    <List divided verticalAlign='middle'>
      {renderContactsList()}
    </List>
  )
}

export default ListItemsFloated