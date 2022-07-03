import { useState } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

export default function Search({ cities }) {
  const [searchStr, setSearchStr] = useState('')
  const navigate = useNavigate()

  const handleSearchChange = e => setSearchStr(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    const matchIndex = cities.findIndex((city, i) => {
      // debugger
      // Compare, ignoring case and accents:
      return searchStr.localeCompare(city.city, 'es-CO', { sensitivity: 'base' }) === 0
    })
    // debugger
    console.log(matchIndex)
    // if ()

    navigate(`${searchStr}`, {state:{ yo: 'yo' }})
    setSearchStr('')
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* TODO: Change label if city is loaded already */}
        <label>FIND A CITY
          <input type='text' onChange={handleSearchChange} value={searchStr} />
        </label>
        <button type='submit'>GO</button>
      </form>

      <Outlet />
    </>
  )
}