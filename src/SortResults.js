import { useLocation } from 'react-router-dom'
import Table from 'react-bootstrap/Table'

export default function SortResults({ handleCityClick }) {
  const location = useLocation()

  const route = location.pathname
  let title
  let tableOutput

  const abcOutput = () => {
    const sortedCities = location.state.sortedCities

    return sortedCities.map(city => {
      return (
        <tr key={`${city.city}${city.population}`}>
          <td>{city.city}</td>
          <td>{city.adminName}</td>
          <td>{city.population}</td>
        </tr>
      )
    })
  }

  const deptOutput = () => {
    const citiesByDept = location.state.citiesByDept
    return citiesByDept.map(city => {
        return (
        <tr key={`${city.city}${city.population}`}>
          <td>{city.city}</td>
          <td>{city.adminName}</td>
          <td>{city.population}</td>
        </tr>
      )
    })
  }

  const popOutput = route => {
    const citiesByPop = location.state.citiesByPop

    if (route === '/sort/pop-max-min') {
      title = 'POPULATION ORDER MAX-MIN:'
    } else {
      title = 'POPULATION ORDER MIN-MAX:'
    }

    return citiesByPop.map(city => {
      return (
        <tr key={`${city.city}${city.population}`}>
          <td>{city.city}</td>
          <td>{city.adminName}</td>
          <td>{city.population}</td>
        </tr>
      )
    })
  }

  switch (route) {
    case '/sort/abc':
      title = 'ALPHABETICAL ORDER:'
      tableOutput = abcOutput()
      break
    case '/sort/departments':
      title = 'DEPARTMENT ORDER:'
      tableOutput = deptOutput()
      break
    case '/sort/pop-max-min':
    case '/sort/pop-min-max':
      tableOutput = popOutput(route)
      break
    default:
      console.log('Switch error!')
  }

  return (
    <>
      <h2>{title}</h2>
        <Table borderless>
          <tbody>
            <tr>
              <th>City:</th>
              <th>Department:</th>
              <th>Population:</th>
            </tr>
            {tableOutput}
          </tbody>
        </Table>
    </>
  )
}