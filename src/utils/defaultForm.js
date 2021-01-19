/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Button, ButtonGroup, Form } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { useForm } from '../utils/useForm'
import { v4 as uuid_v4 } from "uuid";
// DATABASE
import { addContact, editContact } from '../dbService'

const DefaultForm = (props) => {
  const ContactsList = props.contactList
  const initValues = props.contact ? props.contact : {
    username: '',
    email: '',
    phone: '',
    id: uuid_v4()
  }

  const { values, loading, handleChange, onSubmit, errors } = useForm(handleSubmit, initValues, props.setOpen)

  function handleSubmit() {
    if(props.contact) {
      // Change UI when contact edited
      const id = ContactsList.findIndex(c => c.id === props.contact.id)
      ContactsList[id] = {key: ContactsList[id].key ,...values}
      editContact({key: ContactsList[id].key ,...values})
      props.setContactList(ContactsList)
    } else {
      // Change UI when contact added
      props.setContactList?.(ContactsList.concat(values))
      addContact(values)
    }
  }
  

  return (
    <div className="form-container">
      <Form onSubmit={onSubmit} noValidate className={loading ? 'loading': ''}>
        <h1>{props.title}</h1>
        <Form.Input 
          label="დასახელება"
          placeholder="დასახელება..."
          name="username"
          type="text"
          error={!!errors?.username}
          value={values.username}
          onChange={handleChange}
        />
        <Form.Input 
          label="ელ.ფოსტა"
          placeholder="ელ.ფოსტა..."
          name="email"
          type="email"
          error={!!errors?.email}
          value={values.email}
          onChange={handleChange}
        />
        <Form.Input 
          label="ტელეფონი"
          placeholder="ტელეფონი..."
          name="phone"
          type="tel"
          error={!!errors?.phone}
          value={values.phone}
          onChange={handleChange}
        />
        {Object.keys(errors).length > 0 && (
          <div className="ui error message">
            <ul className="list">
              {Object.values(errors).map(val => (
                <li key={val}>{val}</li>
              ))}
            </ul>
          </div>
        )}
        <ButtonGroup fluid>
          <Button color='black' onClick={() => props.setOpen(false)}>
            დახურვა
          </Button>
          <Button
            type="submit"
            content={props.addOrEdit}
            labelPosition='right'
            icon='checkmark'
            positive
          />
        </ButtonGroup>
      </Form>
    </div>
  )
}

DefaultForm.propTypes = {
  setOpen: PropTypes.func,
  contact: PropTypes.object,
  setContactList: PropTypes.func,
  addOrEdit: PropTypes.string.isRequired,
  title: PropTypes.string
}

export default DefaultForm
