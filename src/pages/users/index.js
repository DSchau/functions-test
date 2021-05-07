import * as React from 'react'

function UsersIndex() {
  const [values, setValues] = React.useState({})
  const [response, setResponse] = React.useState(null)
  const changeHandler = name => {
    return ev => setValues(
      Object.assign({}, values, {
        [name]: ev.target.value
      })
    )
  }

  return (
    <div>
      <h1>Add User</h1>
      <pre>{JSON.stringify(response, null, 2)}</pre>
      <form onSubmit={ev => {
        ev.preventDefault()
    
        fetch(`/api/users/${values.name}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        })
          .then(res => res.json())
          .then(data => {
            setResponse(data)
          })
      }}>
        <label htmlFor="name">
          Name
          <input type="text" id="name" placeholder="Name" onChange={changeHandler('name')} />
        </label>
        <label htmlFor="email">
          Email
          <input type="email" id="email" placeholder="Email" onChange={changeHandler('email')} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default UsersIndex
