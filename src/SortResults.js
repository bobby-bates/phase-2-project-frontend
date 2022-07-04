import { useLocation } from 'react-router-dom'
import Table from 'react-bootstrap/Table'

export default function SortResults() {
  const location = useLocation()

  const route = location.pathname
  let sortOutput

  const abcOutput = () => {
    const sortedCities = location.state.sortedCities
    console.log(sortedCities)
    const cityList = sortedCities.map(city => {
      // debugger
      return (
        <tr key={`${city.city}${city.population}`}>
          <td>{city.city}</td>
          <td>{city.adminName}</td>
          <td>{city.population}</td>
        </tr>
      )
    })

    return (
      <>
        <h2>ALPHABETICAL ORDER:</h2>
        <Table borderless>
          <tbody>
            <tr>
              <th>City:</th>
              <th>Department:</th>
              <th>Population:</th>
            </tr>
            {cityList}
          </tbody>
        </Table>
      </>
    )
  }

  const deptOutput = () => {
    const citiesByDeptSingleArr = location.state.citiesByDeptSingleArr
    const citiesByDeptManyArrs = location.state.citiesByDeptManyArrs
  }

  const popOutput = route => {
    const citiesByPop = location.state.citiesByPop
  }

  switch (route) {
    case '/sort/abc':
      sortOutput = abcOutput()
      break
    case '/sort/departments':
      sortOutput = deptOutput()
      break
    case '/sort/pop-max-min':
    case '/sort/pop-min-max':
      sortOutput = popOutput(route)
      break
    default:
      console.log('Switch error!')
  }

  return (
    <>{sortOutput}</>
  )
}