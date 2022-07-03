import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Search({ cities }) {
  const [searchStr, setSearchStr] = useState('')
  const navigate = useNavigate()

  const handleSearchChange = e => setSearchStr(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    console.log(searchStr)
    navigate('')
    setSearchStr('')
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>FIND A CITY
          <input type='text' onChange={handleSearchChange} value={searchStr} />
        </label>
        <button type='submit'>GO</button>
      </form>
    </>
  )
}