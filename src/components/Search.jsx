import React, { useState } from 'react'

import { Search, Dropdown, Container } from 'semantic-ui-react'

const Options = [
  { key: 1, value: 'email', text: 'ელ.ფოსტა' },
  { key: 2, value: 'phone', text: 'ტელეფონი' },
  { key: 3, value: 'username', text: 'დასახელება' },
]

const SearchContacts = (props) => {
  const [selected, setSelected] = useState(Options[2].value)

  const handleFilterChange = (e, { value }) => setSelected(value)
  return (
    <Container>
      <Dropdown 
        placeholder='მოძებნე ველის მიხედვით'
        clearable 
        onChange={handleFilterChange}
        options={Options} 
        selection
        value={selected} />
      <Search disabled={!selected}  {...props} />
    </Container>
  )
}

export default SearchContacts