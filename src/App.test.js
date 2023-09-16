import { render, screen, waitFor } from '@testing-library/react'
import user from '@testing-library/user-event'
import App from './App'

it('tests userform and userlist are in the document and form fields works properly', async () => {
  render(<App />)
  const userFormHeaderText = screen.getByText(/user form/i)
  const userListHeaderText = screen.getByText(/user list/i)
  const nameInput = screen.getByLabelText(/name/i)
  const emailInput = screen.getByLabelText(/email/i)
  const submitButton = screen.getByText(/submit/i)

  expect(userFormHeaderText).toBeInTheDocument()
  expect(userListHeaderText).toBeInTheDocument()

  expect(nameInput).toBeInTheDocument()
  expect(emailInput).toBeInTheDocument()
  expect(submitButton).toBeInTheDocument()

  // Fill the form

  user.type(nameInput, 'John Doe')
  user.type(emailInput, 'johndoe@gmail.com')

  user.click(submitButton)

  await waitFor(() => {
    const nameCell = screen.getByRole('cell', { name: 'John Doe' })
    expect(nameCell).toBeInTheDocument()
  })
  expect(nameInput.value).toBe('')
  expect(emailInput.value).toBe('')
})
