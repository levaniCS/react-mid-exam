/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { validateProductsInput } from './validators'

export const useForm = (callback, initialState = {}) => {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({...values, [name]: value })
  }

  const onSubmit = e => {
    e.preventDefault()
    // Handling errors
    const errorObj = validateProductsInput(values)
    setErrors(errorObj?.errors)
    setLoading(true)
  }

  useEffect(() => {
    // Check to see if there are no errors this will run only when submitting
    if (Object.keys(errors).length === 0 && loading) callback()
    

    setTimeout(() => {
      setLoading(false)
    }, 300);
  }, [errors])

  return {
    values,
    errors,
    loading,
    handleChange,
    onSubmit
  }
}