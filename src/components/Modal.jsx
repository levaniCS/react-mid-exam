import React from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import ProductsForm from '../utils/defaultForm'

const PageModal = (props) => {
  return (
    <Modal
      onClose={() => props.setOpen(false)}
      onOpen={() => props.setOpen(true)}
      open={props.open}
      trigger={props.trigger && <Button color="green"> <Icon name='add' />კონტაქტის დამატება</Button>}
    >
      <Modal.Header>კონტაქტის {props.addOrEdit}</Modal.Header>
      <Modal.Content>
        <ProductsForm {...props}/>
      </Modal.Content>
    </Modal>
  )
}

PageModal.propTypes = {
  setOpen: PropTypes.func,
  open: PropTypes.bool,
  trigger: PropTypes.bool,
  addOrEdit: PropTypes.string,
  contactList: PropTypes.array.isRequired
}

export default PageModal