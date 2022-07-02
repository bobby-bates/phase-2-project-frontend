import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import Search from './Search'
import Sort from './Sort'

export default function App() {
  const [cities, setCities] = useState([])

  // TODO: Find out why this is rerendering the page twice at initial load
  useEffect(() => {
    fetch('http://localhost:3001/colombiaCities')
      .then(r => r.json())
      .then(cities => {
        setCities([...cities])
      })
    }, [])
    console.log(cities)


  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/' element={<NavBar />}>
        <Route path='search' element={<Search cities={cities} />} />
        <Route path='sort' element={<Sort />} />
      </Route>
    </Routes>
  )
}