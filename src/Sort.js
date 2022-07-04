import { useNavigate, Outlet } from 'react-router-dom'
import { DropdownButton, Dropdown } from 'react-bootstrap'

export default function Sort({ cities }) {
  const navigate = useNavigate()

  const sortByABC = name => {
    const cityNames = cities.map((city, i) => ({ i, name: city.city }))

    const sortedCityNames = cityNames.sort((a, b) => {
      const nameA = a.name
      const nameB = b.name
      return nameA.localeCompare(nameB, 'es-CO', { ignorePunctuation: true })
    })

    // Combine sorted city names with full cities arr:
    const sortedCities = sortedCityNames.map(name => cities[name.i])

    navigate(name, {state:{ sortedCities: sortedCities }})
  }

  const sortByDepartments = name => {
    // Create arr of all department names:
    const depts = []
    cities.forEach(city => (
      !depts.includes(city.adminName) ? depts.push(city.adminName) : null
    ))

    // Sort depts in alphabetical order:
    depts.sort((a, b) => {
      return a.localeCompare(b, 'es-CO', { ignorePunctuation: true })
    })
    
    // Loop depts and create abc sorted arr for each dept:
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
    const citiesByDept = deptArrs.flat()
    navigate(name, {state:{ citiesByDept: citiesByDept }})
  }

  const sortByPop = name => {
    const popArr = cities.map((city, i) => ({ i, pop: city.population }))

    const sortedPops = popArr.sort((a, b) => {
      const popA = a.pop
      const popB = b.pop

      return name === 'pop-max-min' ? popA + popB : popA - popB
    })
    const sortedCities = sortedPops.map(pop => cities[pop.i])

    navigate(name, {state: { citiesByPop: sortedCities}})
  }

  const handleSort = e => {
    const name = e.target.name
    switch (name) {
      case 'abc':
        sortByABC(name)
        break
      case 'departments':
        sortByDepartments(name)
        break
      case 'pop-max-min':
      case 'pop-min-max':
        sortByPop(name)
        break
      default:
        console.log('Switch Error!')
    }
  }

  return (
    <>
      <label>SORT CITIES BY:
        <DropdownButton id='dropdown-basic-button' title='SELECT'>
          <Dropdown.Item onClick={handleSort} name={'abc'}>
            ABC
          </Dropdown.Item>
          <Dropdown.Item onClick={handleSort} name={'departments'}>
            DEPARTMENTS
          </Dropdown.Item>
          <Dropdown.Item onClick={handleSort} name={'pop-max-min'}>
            POP MAX-MIN
          </Dropdown.Item>
          <Dropdown.Item onClick={handleSort} name={'pop-min-max'}>
            POP MIN-MAX
          </Dropdown.Item>
        </DropdownButton>
      </label>
      <Outlet />
    </>
  )
}