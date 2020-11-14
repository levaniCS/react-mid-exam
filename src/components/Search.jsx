import React from 'react'

import { Search, Dropdown, Container } from 'semantic-ui-react'

const Options = [
  { key: 1, value: 'email', text: 'ელ.ფოსტა' },
  { key: 2, value: 'phone', text: 'ტელეფონი' },
  { key: 3, value: 'username', text: 'დასახელება' },
]

const SearchContacts = ({searchForm, setSearchForm}) => {
  const handleFilterChange = (e, { value, name }) => {
    setSearchForm(prevState => ({...prevState, [name]: value }))
  }

  return (
    <Container>
      <Dropdown 
        style={{ margin: '1rem 0'}}
        name="dropDown"
        placeholder='მოძებნე ველის მიხედვით'
        clearable 
        onChange={handleFilterChange}
        options={Options} 
        selection
        value={searchForm.dropDown} />
      <Search onSearchChange={handleFilterChange} name="searchValue" disabled={!searchForm.dropDown} />
    </Container>
  )
}

export default SearchContacts