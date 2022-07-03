import { useParams, useLocation } from 'react-router-dom'
import Table from 'react-bootstrap/Table'

export default function SearchResult() {

  // const cityParams = useParams().cityName
  const city = useLocation().state.city

  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${city.lat},${city.lng}&zoom=11&size=400x400&key=AIzaSyDF8PzvjuzBnixB4AGXiCfRN_2QC6GzoBk`

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
            <td>{city.population}</td>
          </tr>
        </tbody>
      </Table>
      <img src={mapUrl} alt='Google Map of Colombia' />
    </>
  )
}
