import * as React from 'react'

import './contact.css'

function Contact() {
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
      <pre>{JSON.stringify(values, null, 2)}</pre>
      <pre>{JSON.stringify(response, null, 2)}</pre>
      <form onSubmit={ev => {
        ev.preventDefault()
    
        fetch('/api/submit-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data, typeof data)
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
        <label htmlFor="message">
          Message
          <textarea id="message" placeholder="Message" onChange={changeHandler('message')}  />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact