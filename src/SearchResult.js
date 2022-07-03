import { useParams } from 'react-router-dom'

export default function SearchResult() {
  const params = useParams()
  return (
    <h1>User entered {params.cityName}</h1>
  )
}
