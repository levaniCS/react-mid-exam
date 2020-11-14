import React from 'react'
import { Button, Form } from 'semantic-ui-react'

import { useForm } from '../utils/useForm'

const DefaultForm = (props) => {
  const handleSubmit = () => {}

  const { values, loading, handleChange, onSubmit, errors } = useForm(handleSubmit, {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  

  return (
    <div className="form-container">
      <Form onSubmit={onSubmit} noValidate className={loading ? 'loading': ''}>
        <h1>{props.title}</h1>
        <Form.Input 
          label="Username"
          placeholder="Username..."
          name="username"
          type="text"
          error={!!errors?.username}
          value={values.username}
          onChange={handleChange}
        />
        <Form.Input 
          label="Email"
          placeholder="Email..."
          name="email"
          type="email"
          error={!!errors?.email}
          value={values.email}
          onChange={handleChange}
        />
        <Form.Input 
          label="Password"
          placeholder="Password..."
          name="password"
          type="password"
          error={!!errors?.password}
          value={values.password}
          onChange={handleChange}
        />
        <Form.Input 
          label="Confirm Password"
          placeholder="Confirm Password..."
          name="confirmPassword"
          type="password"
          error={!!errors?.confirmPassword}
          value={values.confirmPassword}
          onChange={handleChange}
        />
        <Button type="submit" primary>Submit</Button>
      </Form>
      {Object.keys(errors).length > 0 && (
        <div className="ui error message">
          <ul className="list">
            {Object.values(errors).map(val => (
              <li key={val}>{val}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default DefaultForm
