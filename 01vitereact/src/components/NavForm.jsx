import React, { useState } from 'react'

const NavForm = ({ onSubmitName }) => {
  const [username, setUsername] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmitName(username)
    setUsername(" ")
  }
  return (
    <>
      <form  onSubmit={handleSubmit} >
        <input type="text"
          placeholder='set username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />{ }
        <button>Submit</button>
      </form>
    </>
  )
}

export default NavForm
