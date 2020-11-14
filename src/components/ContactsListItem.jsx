import React, { useState} from 'react'
import { Button, Image, List, Modal } from 'semantic-ui-react'

import ModalWithForm from '../components/Modal'

import Pic from './mypic.jpg'

const ListItem = () => {
  const [open, setOpen] = useState(false)
  const [isDeleting, setIsDelete] = useState(false)
  
  return (
    <List.Item>
      <ModalWithForm addOrEdit="ედითი"  open={open} setOpen={setOpen}/>
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
          <Button positive onClick={() => setIsDelete(false)}>კი</Button>
        </Modal.Actions>
      </Modal>
      <List.Content floated='right'>
        <Button color="red" onClick={() => setIsDelete(true)}>წაშლა</Button>
        <Button color="orange" onClick={() => setOpen(true)}>შეცვლა</Button>
      </List.Content>
      <Image avatar src={Pic} />
      <List.Content>Lena</List.Content>
    </List.Item>
  )
}

export default  ListItem