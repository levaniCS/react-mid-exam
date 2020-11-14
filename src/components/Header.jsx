import React from 'react'
import { Menu } from 'semantic-ui-react'

const MenuBar = () => (
  <Menu pointing secondary size="massive" color="orange">
    <Menu.Item
      className="border-bottom-0"
      name='Nav bar'
      active
    />
  </Menu>
)

export default MenuBar