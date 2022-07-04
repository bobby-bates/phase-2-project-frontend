import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import Search from './Search'
import SearchResult from './SearchResult'
import Sort from './Sort'
import SortResults from './SortResults'

export default function App() {
  const [cities, setCities] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/colombiaCities')
      .then(r => r.json())
      .then(cities => {
        setCities([...cities])
      })
    }, [])

    const handleCityClick = () => {

    }

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/' element={<NavBar />}>
        <Route path='search' element={<Search cities={cities} />}>
          <Route 
            path=':cityName'
            element={<SearchResult
            handleCityClick={handleCityClick} />}
          />
        </Route>
        <Route path='sort' element={<Sort cities={cities} />}>
          <Route
            path='abc'
            element={<SortResults
            handleCityClick={handleCityClick} />}
          />
          <Route
            path='departments'
            element={<SortResults
            handleCityClick={handleCityClick} />}
          />
          <Route
            path='pop-max-min'
            element={<SortResults
            handleCityClick={handleCityClick} />}
          />
          <Route
            path='pop-min-max'
            element={<SortResults
            handleCityClick={handleCityClick} />}
          />
        </Route>
      </Route>
    </Routes>
  )
}