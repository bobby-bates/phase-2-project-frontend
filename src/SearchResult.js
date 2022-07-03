import { useParams, useLocation } from 'react-router-dom'

export default function SearchResult({ yo }) {
  const params = useParams()
  const location = useLocation()
  return (
    <>
      <h1>User entered {params.cityName}</h1>
      <h1>State is: {location.state.yo}</h1>
    </>
  )
}
