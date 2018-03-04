import React from 'react'

const LogoutForm = ({ handleSubmit }) => {
  return (
    <div>
        <button onClick={handleSubmit}>log out</button>
    </div>
  )
}

export default LogoutForm