import { Link } from 'react-router-dom'

export default function Home() {

  return (
    <>
      <h1>CITIES OF COLOMBIA</h1>
      <Link to='search'>FIND A CITY</Link>
      <Link to='sort'>SORT CITIES</Link>
    </>
  )
}