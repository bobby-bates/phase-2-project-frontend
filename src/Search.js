import { useState } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

export default function Search({ cities }) {
  const [searchStr, setSearchStr] = useState('')
  const navigate = useNavigate()

  const isEnabled = searchStr.length > 0

  const handleSearchChange = e => setSearchStr(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    const matchIndex = cities.findIndex((city, i) => {
      // Compare, ignoring case and accents:
      return searchStr.localeCompare(city.city, 'es-CO', { sensitivity: 'base' }) === 0
    })
    // debugger
    console.log(matchIndex)
    if (matchIndex === 0) navigate(`${searchStr}`, {state:{ city: cities[matchIndex] }})
    else 
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