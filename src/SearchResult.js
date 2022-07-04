import { useParams, useLocation } from 'react-router-dom'
import Table from 'react-bootstrap/Table'

export default function SearchResult() {

  // const cityParams = useParams().cityName
  const city = useLocation().state.city
  const API_KEY = process.env.API_KEY

  // TODO: Find a way to multiline this URL without breaking it
  const mapUrl = 
  `https://maps.googleapis.com/maps/api/staticmap?center=${city.lat},${city.lng}&zoom=10&scale=2&maptype=hybrid&size=400x400&scale=1&key=${API_KEY}`
    
    // mapUrl.replace('\n', '')
  return (
    <>
      <Table borderless>
        <tbody>
          <tr>
            <th>City:</th>
            <td>{city.city}</td>
          </tr>
          <tr>
            <th>Department:</th>
            <td>{city.adminName}</td>
          </tr>
          <tr>
            <th>Population:</th>
            <td>{city.population.toLocaleString('en')} people</td>
          </tr>
        </tbody>
      </Table>
      <img src={mapUrl} alt='Google Map of Colombia' />
    </>
  )
}
