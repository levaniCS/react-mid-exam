import React from 'react'
import PropTypes from 'prop-types'
import { Header, Segment, Loader } from 'semantic-ui-react'
import ContactsListItem  from './ContactsListItem'

const ListItemsFloated = ({contactList, setContactList, loading}) => {
  const renderContactsList = () => {
    if(contactList?.length) {
      return contactList.map(item => <ContactsListItem setContactList={setContactList} contactList={contactList}  key={item.id} item={item} />)
    }

    if(loading) {
      return <Loader />
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