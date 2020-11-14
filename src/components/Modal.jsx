import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import propTypes from 'prop-types'
import ProductsForm from '../utils/defaultForm'

const PageModal = (props) => (
  <Modal
    onClose={() => props.setOpen(false)}
    onOpen={() => props.setOpen(true)}
    open={props.open}
    trigger={props.trigger && <Button primary>კონტაქტის {props.addOrEdit}</Button>}
  >
    <Modal.Header>კონტაქტის {props.addOrEdit}</Modal.Header>
    <Modal.Content>
      <ProductsForm {...props}/>
    </Modal.Content>
  </Modal>
)

PageModal.DefaultForm = {
  setOpen: propTypes.object,
  open: propTypes.bool,
  trigger: propTypes.bool,
  addOrEdit: propTypes.string
}

export default PageModal