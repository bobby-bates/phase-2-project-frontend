import { useNavigate, Outlet } from 'react-router-dom'
import { DropdownButton, Dropdown } from 'react-bootstrap'

export default function Sort({ cities }) {
  const navigate = useNavigate()

  // Sort logic here:
  

  return (
    <>
      <label>SORT CITIES BY:
        <DropdownButton id='dropdown-basic-button' title='SELECT'>
          <Dropdown.Item onClick={()=>navigate('abc')}>ABC</Dropdown.Item>
          <Dropdown.Item onClick={()=>navigate('deptartments')}>DEPARTMENTS</Dropdown.Item>
          <Dropdown.Item onClick={()=>navigate('pop-max-min')}>POP MAX-MIN</Dropdown.Item>
          <Dropdown.Item onClick={()=>navigate('pop-min-max')}>POP MIN-MAX</Dropdown.Item>
        </DropdownButton>
      </label>
      <Outlet />
    </>
  )
}