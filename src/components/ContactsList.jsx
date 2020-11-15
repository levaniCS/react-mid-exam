/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import PropTypes from 'prop-types'
import { Header, Segment } from 'semantic-ui-react'
import ContactsListItem  from './ContactsListItem'

const ListItemsFloated = ({contactList, setContactList}) => {
  const renderContactsList = () => {
    if(contactList.length) {
      return contactList.map(item => <ContactsListItem setContactList={setContactList} contactList={contactList}  key={item.id} item={item} />)
    }
    return <Header as="h5" textAlign="center">კონტაქტები ცარიელია</Header>
  }
  return (
    <Segment>
      {renderContactsList()}
    </Segment>
  )
}

ListItemsFloated.propTypes = {
  contactList: PropTypes.array,
  setContactList: PropTypes.func
}

export default ListItemsFloated