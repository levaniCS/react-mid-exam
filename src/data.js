const ProductsList = [
  { id: 1, name: 'Levan Sarishvili', price: 22.32},
  { id: 1, name: 'Levan Sarishvili', price: 22.32},
  { id: 1, name: 'Levan Sarishvili', price: 22.32},
  { id: 1, name: 'Levan Sarishvili', price: 22.32},
]

export default ProductsList



export function getContacts(){
  const contacts = JSON.parse(localStorage.getItem('contacts')) || []
  return contacts
}

export function addContact(contact){
   const contacts = getContacts()
   const contactArray = [...contacts, contact]
   localStorage.setItem('contacts', JSON.stringify(contactArray))
}