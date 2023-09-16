import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function UserForm(props) {
  const { addUser } = props

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      }
    })
  }
  console.log('formData', formData)

  const handleSubmit = (event) => {
    event.preventDefault()

    const newUser = {
      ...formData,
      id: uuidv4(),
    }
    addUser(newUser)
    setFormData({
      name: '',
      email: '',
    })
  }
  return (
    <div className="container mb-4">
      <h1 className="text-center my-1">User Form</h1>
      <form className="user-form" onSubmit={handleSubmit}>
        <div className="form-element">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control my-3"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-element">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control my-3"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}
