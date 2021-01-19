import firebaseService from './firebaseConfig'

const contactRef = firebaseService.database().ref('contacts')

export const getContacts = () => contactRef
export const addContact = (contact) => contactRef.push(contact)
export const deleteContact = (key) => contactRef.child(key).remove()
export const editContact = (contact) => contactRef.child(contact.key).update(contact)
