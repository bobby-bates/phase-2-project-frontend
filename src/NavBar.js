import { NavLink, Outlet } from 'react-router-dom'

export default function NavBar() {

  return (
    <>
      <nav>
        <NavLink to='/'>CITIES OF COLOMBIA</NavLink> {" "}
        <NavLink to='search'>Search</NavLink> | {" "}
        <NavLink to='sort'>Sort</NavLink>
      </nav>

      <Outlet />
    </>
  )
}