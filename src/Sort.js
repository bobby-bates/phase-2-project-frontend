import { useNavigate, Outlet } from 'react-router-dom'
import { DropdownButton, Dropdown } from 'react-bootstrap'

export default function Sort({ cities }) {
  const navigate = useNavigate()

  const handleSort = e => {
    // debugger
    const name = e.target.name
    
    // Sort logic here:
    // const sortCities = cities.sort((a, b) => )

    // Finally, navigate to correct url & pass sorted cities as props:
    // eslint-disable-next-line default-case
    switch (name) {
      case 'abc':
        // debugger
        // const sortedCities = cities.sort((a, b) => {
        //   // debugger
        //   return a.name.localeCompare(b.name, 'es-CO', { ignorePunctuation: true })
        // })

        navigate('abc')
        // navigate('abc', {state:{ sortedCities: sortedCities }})
        break
      case 'departments':
        navigate('departments')
        break
      case 'pop-max-min':
        navigate('pop-max-min')
        break
      case 'pop-min-max':
        navigate('pop-min-max')
        break
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