import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import UserForm from './UserForm'
import userEvent from '@testing-library/user-event'
//Mock addUser function for testing
const mockAddUser = jest.fn()

test('it renders a user form with name and email fields', () => {
  render(<UserForm addUser={mockAddUser} />)

  const nameInput = screen.getByLabelText(/name/i)
  const emailInput = screen.getByLabelText(/email/i)
  const submitButton = screen.getByText(/submit/i)

  expect(nameInput).toBeInTheDocument()
  expect(emailInput).toBeInTheDocument()
  expect(submitButton).toBeInTheDocument()
})

test('it updates the form data when input fields are changed', () => {
  render(<UserForm addUser={mockAddUser} />)

  const nameInput = screen.getByLabelText(/name/i)
  const emailInput = screen.getByLabelText(/email/i)

  fireEvent.change(nameInput, { target: { value: 'Alex de Souza' } })
  fireEvent.change(emailInput, { target: { value: 'alexsouze@gmail.com' } })

  expect(nameInput.value).toBe('Alex de Souza')
  expect(emailInput.value).toBe('alexsouze@gmail.com')
})
test('it submits the form with the correct data when Submit is clicked', () => {
  render(<UserForm addUser={mockAddUser} />)

  const nameInput = screen.getByLabelText(/name/i)
  const emailInput = screen.getByLabelText(/email/i)
  const submitButton = screen.getByText(/submit/i)

  userEvent.click(nameInput)
  userEvent.keyboard('Alex de Souza')
  userEvent.type(emailInput, 'alexsouze@gmail.com')

  expect(nameInput.value).toBe('Alex de Souza')
  expect(emailInput.value).toBe('alexsouze@gmail.com')

  userEvent.click(submitButton)

  expect(mockAddUser).toHaveBeenCalledWith({
    name: 'Alex de Souza',
    email: 'alexsouze@gmail.com',
    id: expect.any(String), // Check that an ID (UUID) is generated
  })
})

it('resets the form after submission', () => {
  render(<UserForm addUser={mockAddUser} />)

  const nameInput = screen.getByLabelText(/name/i)
  const emailInput = screen.getByLabelText(/email/i)
  const submitButton = screen.getByText(/submit/i)

  fireEvent.change(nameInput, { target: { value: 'John Doe' } })
  fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } })

  expect(nameInput.value).toBe('John Doe')
  expect(emailInput.value).toBe('johndoe@example.com')

  fireEvent.click(submitButton)

  // Check if the form fields are empty after submission
  expect(nameInput.value).toBe('')
  expect(emailInput.value).toBe('')
})

test('it resets the form after submission using userEvent', async () => {
  render(<UserForm addUser={mockAddUser} />)

  const nameInput = screen.getByLabelText(/name/i)
  const emailInput = screen.getByLabelText(/email/i)
  const submitButton = screen.getByText(/submit/i)

  // Use userEvent to change input values
  userEvent.type(nameInput, 'John Doe')
  userEvent.type(emailInput, 'johndoe@example.com')

  expect(nameInput).toHaveValue('John Doe')
  expect(emailInput).toHaveValue('johndoe@example.com')

  userEvent.click(submitButton)

  // Use userEvent to reset the form
  await waitFor(() => expect(nameInput).toHaveValue(''))
  await waitFor(() => expect(emailInput).toHaveValue(''))
})
