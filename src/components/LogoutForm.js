import React from 'react'

const LogoutForm = ({ handleSubmit, handleChange }) => {
  return (
    <div>
      <h2>Kirjaudu</h2>

      <form onSubmit={handleSubmit}>
        <button type="submit">log out</button>
      </form>
    </div>
  )
}

export default LogoutForm