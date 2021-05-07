import * as React from 'react'

function User({ params }) {
  /* Display the user from the DB */
  return (
    <h1>{params.id}</h1>
  )
}

export default User
