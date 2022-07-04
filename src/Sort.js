import { useNavigate, Outlet } from 'react-router-dom'
import { DropdownButton, Dropdown } from 'react-bootstrap'

export default function Sort({ cities }) {
  const navigate = useNavigate()

  const handleSort = e => {
    // debugger
    const name = e.target.name


    // debugger
    // eslint-disable-next-line default-case
    switch (name) {
      case 'abc': {
          // Create array of city name strings:
          // const cityNames = () => cities.map(city => city.city)
          const cityNames = cities.map((city, i) => ({ i, name: city.city }))
          // debugger
          const sortedCityNames = cityNames.sort((a, b) => {
            // debugger
            const nameA = a.name
            const nameB = b.name

            return nameA.localeCompare(nameB, 'es-CO', { ignorePunctuation: true })
        })
        // debugger
        // Combine sorted city names with full cities arr:
        const sortedCities = sortedCityNames.map(name => cities[name.i])
        // debugger
        navigate('abc', {state:{ sortedCities: sortedCities }})
        break
      }
      case 'departments': {
        // Create arr of all departments:
        const depts = []
        cities.forEach(city => {
          return !depts.includes(city.adminName) ? depts.push(city.adminName) : null
        })

        // Loop depts and create abc sorted arr for each dept
        let deptArrs = []
        depts.forEach(dept => {
          const deptArr = cities.filter(city => city.adminName === dept)
            deptArr.sort((a, b) => {
            const cityA = a.city
            const cityB = b.city
            return cityA.localeCompare(cityB, 'es-CO', { ignorePunctuation: true })
          })
          deptArrs.push(deptArr)
        })

        // Merge all sorted dept arrs into single arr:
        const citiesByDeptSingleArr = deptArrs.flat()

        navigate('departments',
          {state:{
            citiesByDeptSingleArr: citiesByDeptSingleArr,
            citiesByDeptManyArrs: deptArrs
          }})
        break
      }
      case 'pop-max-min': {
        navigate('pop-max-min')
        break
      }
      case 'pop-min-max': {
        navigate('pop-min-max')
        break
      }
    }
  }

  return (
    <>
      <label>SORT CITIES BY:
        <DropdownButton id='dropdown-basic-button' title='SELECT'>
          <Dropdown.Item onClick={handleSort} name={'abc'}>ABC</Dropdown.Item>
          <Dropdown.Item onClick={handleSort} name={'departments'}>DEPARTMENTS</Dropdown.Item>
          <Dropdown.Item onClick={handleSort} name={'pop-max-min'}>POP MAX-MIN</Dropdown.Item>
          <Dropdown.Item onClick={handleSort} name={'pop-min-max'}>POP MIN-MAX</Dropdown.Item>
        </DropdownButton>
      </label>
      <Outlet />
    </>
  )
}