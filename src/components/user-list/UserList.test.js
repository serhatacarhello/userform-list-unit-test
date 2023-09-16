import { render, screen, within } from '@testing-library/react'

import UserList from './UserList'

test('it shows a table row for each user', () => {
  // get ready components props
  const users = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    },

    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
    },

    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
    },
  ]

  //render a component
  // send its props
  render(<UserList users={users} />)
  const userListElement = screen.getByTestId('users-list')

  //get all row elements in userListElement
  // within used for get children elements in a parent element
  const rows = within(userListElement).getAllByRole('row')
  expect(rows).toHaveLength(users.length)
})
