import { useState } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

export default function Search({ cities }) {
  const [searchStr, setSearchStr] = useState('')
  const navigate = useNavigate()

  const isEnabled = searchStr.length > 0

  const handleSearchChange = e => setSearchStr(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    const matchIndex = cities.findIndex(city => {
      // Compare, ignoring case and accents:
      return searchStr.localeCompare(city.city, 'es-CO', { sensitivity: 'base' }) === 0
    })
    // debugger
    if (matchIndex !== -1) {
      navigate(`${cities[matchIndex].city}`, {state:{ city: cities[matchIndex] }})
    } else console.log(`Error: ${searchStr} not found`)
    // TODO: Add Bootstrap error banner when city is not found
    setSearchStr('')
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* TODO: Change label if city is loaded already */}
        <label>FIND A CITY
          <input type='text' onChange={handleSearchChange} value={searchStr} />
        </label>
        <button type='submit'disabled={!isEnabled}>GO</button>
      </form>

      <Outlet />
    </>
  )
}