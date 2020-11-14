import React from 'react'
import { Button, ButtonGroup, Form } from 'semantic-ui-react'

import { useForm } from '../utils/useForm'

const DefaultForm = (props) => {
  const handleSubmit = () => {}

  const { values, loading, handleChange, onSubmit, errors } = useForm(handleSubmit, {
    username: '',
    email: '',
    phone: '',
  })
  

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
        <ButtonGroup floated fluid>
          <Button color='black' onClick={() => props.setOpen(false)}>
            დახურვა
          </Button>
          <Button
            type="submit"
            content={props.addOrEdit}
            labelPosition='right'
            icon='checkmark'
            onClick={(e) => {
              onSubmit(e)
              // props.setOpen(false)
            }}
            positive
          />
        </ButtonGroup>
      </Form>
    </div>
  )
}

export default DefaultForm
