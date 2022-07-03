import { useParams, useLocation } from 'react-router-dom'
import Table from 'react-bootstrap/Table'

export default function SearchResult() {
  // debugger
  // const cityParams = useParams().cityName
  const city = useLocation().state.city
  // console.log(city)
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
    </>
  )
}
