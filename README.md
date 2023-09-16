# React Form Testing with React Testing Library - Beginner's Guide

This guide will walk you through setting up and testing a simple React form that collects a user's name and email, and then adds this data to a table using React Testing Library.

## Introduction

In this guide, we'll create a React component that renders a form to collect user data and adds that data to a table. We'll then write tests using React Testing Library to ensure our component behaves as expected.

## Installation

Before we begin, make sure you have the following prerequisites:

- Node.js and npm (Node Package Manager) installed on your system.
- A React project set up and ready to go.

Now, let's install React Testing Library:

1.  Open your terminal and navigate to your React project's root directory.

2.  Install React Testing Library and Jest (a testing framework used by React Testing Library) as development dependencies by running the following command:

    bashCopy code

    `npm install --save-dev @testing-library/react @testing-library/jest-dom`

3.  Wait for the installation to complete.

4.  Your project is now ready for unit testing!

## Writing Your First Unit Test

Let's create a React component that collects a user's name and email and adds this data to a table. We'll then write tests for this component.

Here's an example component (`UserForm.js`):

jsxCopy code

```

`import React, { useState } from 'react';

function UserForm() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [users, setUsers] = useState([]);

const handleSubmit = (e) => {
e.preventDefault();
if (name && email) {
setUsers([...users, { name, email }]);
setName('');
setEmail('');
}
};

return (
<div>
<form onSubmit={handleSubmit}>
<label htmlFor="name">Name:</label>
<input
type="text"
id="name"
value={name}
onChange={(e) => setName(e.target.value)}
/>
<label htmlFor="email">Email:</label>
<input
type="email"
id="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>
<button type="submit">Add User</button>
</form>
<table>
<thead>
<tr>
<th>Name</th>
<th>Email</th>
</tr>
</thead>
<tbody>
{users.map((user, index) => (
<tr key={index}>
<td>{user.name}</td>
<td>{user.email}</td>
</tr>
))}
</tbody>
</table>
</div>
);
}
```

export default UserForm;`

In this component, we have a form to collect user data and a table to display the data.

Now, let's write a test (`UserForm.test.js`) using React Testing Library:

jsxCopy code

```

`import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UserForm from './UserForm';

test('UserForm adds user data to the table', () => {
const { getByLabelText, getByText } = render(<UserForm />);

const nameInput = getByLabelText('Name:');
const emailInput = getByLabelText('Email:');
const addButton = getByText('Add User');

fireEvent.change(nameInput, { target: { value: 'John' } });
fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
fireEvent.click(addButton);

expect(getByText('John')).toBeInTheDocument();
expect(getByText('john@example.com')).toBeInTheDocument();
});`
```

This test case simulates filling out the form fields, clicking the "Add User" button, and then asserts that the user's name and email appear in the table.

## Running Tests

To run your tests, execute the following command in your terminal from your project's root directory:

bashCopy code

`npm test`

This command will start Jest and run all test files in your project. You should see the test results in your terminal.

## Resources

- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)

That's it! You've successfully set up React Testing Library and written a basic test for a React component that collects user data and updates a table. Continue exploring more testing techniques and best practices as you become more confident in testing your React applications. Happy testing!
