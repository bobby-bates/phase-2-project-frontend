import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import Search from './Search'
import SearchResult from './searchResult'
import Sort from './Sort'
import SortResults from './SortResults'

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
        <Route path='search' element={<Search />}>
          <Route path='search/:cityName' element={<SearchResult cities={cities} />} />
        </Route>
        <Route path='sort' element={<Sort />}>
          <Route path='sort/abc' element={<SortResults cities={cities} />} />
          <Route path='sort/deptartments' element={<SortResults cities={cities} />} />
          <Route path='sort/pop-max-min' element={<SortResults cities={cities} />} />
          <Route path='sort/pop-min-max' element={<SortResults cities={cities} />} />
        </Route>
      </Route>
    </Routes>
  )
}