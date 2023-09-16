import React from 'react'

export default function UserList(props) {
  const { users } = props
  return (
    <div className="container ">
      <h1 className="text-center">User List</h1>
      <table className="table table-dark table-bordered table-striped table-hover rounded">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody data-testid="users-list">
          {users?.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
