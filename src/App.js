import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import Search from './Search'
import Sort from './Sort'

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/' element={<NavBar />}>
        <Route path='search' element={<Search />} />
        <Route path='sort' element={<Sort />} />
      </Route>
    </Routes>
  )
}