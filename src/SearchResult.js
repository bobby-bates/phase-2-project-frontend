import { useParams, useLocation } from 'react-router-dom'

export default function SearchResult() {
  // debugger
  const params = useParams()
  const location = useLocation()
  // console.log(city)
  return (
    <>
      <h1>User entered {params.cityName}</h1>
      <h2>Which is the same as {location.state.city.city}</h2>
    </>
  )
}
