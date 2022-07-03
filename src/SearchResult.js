import { useParams, useLocation } from 'react-router-dom'

export default function SearchResult() {
  // debugger
  const cityParams = useParams().cityName
  const loc = useLocation()
  const city = loc.state.city
  console.log(city)
  return (
    <>
      <h1>User entered {cityParams}</h1>
      <h2>Which is the same as {city.city}</h2>

      
    </>
  )
}
