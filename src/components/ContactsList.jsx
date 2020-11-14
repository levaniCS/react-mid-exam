import React from 'react'
import { List } from 'semantic-ui-react'
import ContactsListItem  from './ContactsListItem'

const testArray = [
  { key: 1},
  { key: 2},
  { key: 3},
  { key: 4},
  { key: 5},
  { key: 6},
]

const ListItemsFloated = () => {
  const renderContactsList = () => testArray.map(item => <ContactsListItem key={item.key} />)
  return (
    <List divided verticalAlign='middle'>
      {renderContactsList()}
    </List>
  )
}

export default ListItemsFloated