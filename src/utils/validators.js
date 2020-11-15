/* eslint-disable no-useless-escape */
export const validateProductsInput = ({
  username,
  email,
  phone

}) => {

  const errors = {}

  if(username.trim() === ''){
    errors.username = 'დასახელება არ უნდა იყოს ცარიელი'
  }
  if(email.trim() === ''){
    errors.email = 'იმეილი არ უნდა იყოს ცარიელი'
  } else {
    const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.email = 'იმეილი არ არის ვალიდური';
    }
  }

  if(phone.trim() === '') {
    errors.phone = 'ნომერი არ უნდა იყოს ცარიელი'
  } else {
    const regEx = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i
    if (!phone.match(regEx)) {
      errors.phone = 'ნომერი არ არის ვალიდური';
    }
  }

  if(phone.trim().length < 8) {
    errors.phone = 'ნომრის ციფრთა რაოდენობა მეტი უნდა იყოს 8ზე'
  }
  if(phone.trim().length > 20 ) {
    errors.phone = 'ნომრის ციფრთა რაოდენობა არ უნდა აღემატებოდეს 20ს'
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1
  }
}