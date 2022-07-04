import { useNavigate, Outlet } from 'react-router-dom'
import { DropdownButton, Dropdown } from 'react-bootstrap'

export default function Sort({ cities }) {
  const navigate = useNavigate()

  const handleSort = e => {
    // debugger
    const type = e.target.innerText
    
    // Sort logic here:

    // Finally, navigate to correct url & pass sorted cities as props:
    // eslint-disable-next-line default-case
    switch (type) {
      case 'ABC':
        navigate('abc')
        break
      case 'DEPARTMENTS':
        navigate('departments')
        break
      case 'POP MAX-MIN':
        navigate('pop-max-min')
        break
      case 'POP MIN-MAX':
        navigate('pop-min-max')
        break
    }
  }

  return (
    <>
      <label>SORT CITIES BY:
        <DropdownButton id='dropdown-basic-button' title='SELECT'>
          <Dropdown.Item onClick={handleSort} data-nav={'abc'}>ABC</Dropdown.Item>
          <Dropdown.Item onClick={handleSort} data-nav={'deptartments'}>DEPARTMENTS</Dropdown.Item>
          <Dropdown.Item onClick={handleSort} data-nav={'pop-max-min'}>POP MAX-MIN</Dropdown.Item>
          <Dropdown.Item onClick={handleSort} data-nav={'pop-min-max'}>POP MIN-MAX</Dropdown.Item>
        </DropdownButton>
      </label>
      <Outlet />
    </>
  )
}