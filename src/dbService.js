export const getContacts = () =>  JSON.parse(localStorage.getItem('contacts')) || []

export const addContact = (contact) => {
   const contacts = getContacts()
   const contactArray = [...contacts, contact]
   localStorage.setItem('contacts', JSON.stringify(contactArray))
}


export const deleteContact = (contactId) => {
   const contacts = getContacts().filter(contact => contact.id !== contactId)
   localStorage.setItem('contacts', JSON.stringify(contacts))
}

export const editContact = (contact) => {
   let contacts = getContacts()
   const editedContactIndx = contacts.findIndex(ct => ct.id === contact.id)
   if(editedContactIndx !== -1){
      contacts[editedContactIndx] = contact
      localStorage.setItem('contacts', JSON.stringify(contacts))
   }
}