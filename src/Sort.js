import { Link, useNavigate, Outlet } from 'react-router-dom'
import { Dropdown, DropdownButton } from 'react-bootstrap'

export default function Sort() {
  const navigate = useNavigate()

  return (
    <>
      <label>SORT CITIES BY
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