import { render, screen, within } from '@testing-library/react'
import UserList from './UserList'

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

test('it renders a table row for each user in the UserList component', () => {
  render(<UserList users={users} />)
  const userListElement = screen.getByTestId('users-list')

  // Get all row elements within the UserList component
  const rows = within(userListElement).getAllByRole('row')

  // Ensure that the number of rows matches the number of users
  expect(rows).toHaveLength(users.length)
})

test('it displays the name and email fields for each user in the UserList component', () => {
  render(<UserList users={users} />)

  // Check if the name and email fields are present for each user
  for (const user of users) {
    const nameCell = screen.getByText(user.name)
    const emailCell = screen.getByText(user.email)

    // Ensure that the name and email fields are rendered
    expect(nameCell).toBeInTheDocument()
    expect(emailCell).toBeInTheDocument()
  }
})
