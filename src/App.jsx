import { useState } from 'react'
import UserForm from './components/user-form/UserForm'
import UserList from './components/user-list/UserList'

function App() {
  const [users, setUsers] = useState([
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
  ])
  return (
    <div className="App">
      <UserForm />
      <UserList users={users} />
    </div>
  )
}

export default App
