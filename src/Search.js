import { useState } from 'react'

export default function Search() {
  const [searchStr, setSearchStr] = useState('')

  const handleSearchChange = e => setSearchStr(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    console.log(searchStr)

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