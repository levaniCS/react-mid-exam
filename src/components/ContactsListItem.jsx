import React, { useState } from 'react'
import { Button, List, Modal, Card, Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import ModalWithForm from '../components/Modal'
// DATABASE
import { deleteContact } from '../dbService'


const ListItem = (props) => {
  const { item: contact, setContactList, contactList } = props
  const [open, setOpen] = useState(false)
  const [isDeleting, setIsDelete] = useState(false)

  // Remove contact from Localhost & Upadate UI
  const handleDelete = () => {
    deleteContact(contact.id)
    setTimeout(() => {
      setIsDelete(false)
      setContactList(contactList.filter(c => c.id !== contact.id))
    }, 300)
  }
  
  return (
    <Card color="blue"  fluid style={{ padding: '1rem'}}>
      <ModalWithForm
        setContactList={setContactList}
        contact={contact} 
        addOrEdit="ცვლილება"  
        open={open} 
        setOpen={setOpen}
      />
      <Modal
        size='mini'
        open={isDeleting}
        onClose={() => setIsDelete(false)}
      >
        <Modal.Header>კონტაქტის წაშლა</Modal.Header>
        <Modal.Content>
          <p>დარწმუნებული ხართ რომ გსურთ კონტაქტის წაშლა?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => setIsDelete(false)}>არა</Button>
          <Button positive onClick={handleDelete}>კი</Button>
        </Modal.Actions>
      </Modal>
      <List divided>
        <List.Content floated="right">
          <Button icon color="red" onClick={() => setIsDelete(true)}>
            <Icon name='delete' /> წაშლა
          </Button>
          <Button icon color="orange" onClick={() => setOpen(true)}>
            <Icon name='edit' /> ცვლილება
          </Button>
        </List.Content>
        <List.Description>
          <p>აიდი: {contact.id}</p>
          <p>დასახელება: {contact.username} </p>
          <p>ტელეფონი: {contact.phone} </p>
          <p>ელ.ფოსტა: {contact.email} </p>
        </List.Description>
      </List>
    </Card>
  )
}

ListItem.propTypes = {
  contactList: PropTypes.array,
  setContactList: PropTypes.func,
  item: PropTypes.object,
}


export default  ListItem