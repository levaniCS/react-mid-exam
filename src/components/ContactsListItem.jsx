import React, { useState} from 'react'
import { Button, List, Modal } from 'semantic-ui-react'

import ModalWithForm from '../components/Modal'
// DATABASE
import { deleteContact } from '../dbService'


const ListItem = (props) => {
  const { item: contact, setContactList, contactList } = props
  const [open, setOpen] = useState(false)
  const [isDeleting, setIsDelete] = useState(false)

  const handleDelete = () => {
    deleteContact(contact.id)
    setTimeout(() => {
      setIsDelete(false)
      setContactList(contactList.filter(c => c.id !== contact.id))
    }, 300)
  }
  
  return (
    <List.Item style={{ padding: '1rem', borderBottom: '1px solid gray' }}>
      <ModalWithForm
        setContactList={setContactList}
        contact={contact} 
        addOrEdit="ედითი"  
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
      <List.Content floated='right'>
        <Button color="red" onClick={() => setIsDelete(true)}>წაშლა</Button>
        <Button color="orange" onClick={() => setOpen(true)}>შეცვლა</Button>
      </List.Content>
      <List.Description>
        <p>აიდი: {contact.id}</p>
        <p>დასახელება: {contact.username} </p>
        <p>ტელეფონი: {contact.phone} </p>
        <p>ელ.ფოსტა: {contact.email} </p>
      </List.Description>
    </List.Item>
  )
}

export default  ListItem