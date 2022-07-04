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
  const [alert, setAlert] = useState()

  useEffect(() => {
    fetch('http://localhost:3001/colombiaCities')
      .then(r => r.json())
      .then(cities => {
        setCities([...cities])
      })
    }, [])

    const handleCityClick = e => {
      // Front end:
      const name = e.target.innerText
      const dept = e.target.dataset.cityDept
      const foundCity = cities.find(city => city.city === name && city.adminName === dept)
      // console.log(cities[1].fav)
      if (!foundCity.fav) {
        setCities([...cities, foundCity.fav = true])
        setAlert(<h1>{name} added as a favorite!</h1>)
      } else {
        setCities([...cities, foundCity.fav = false])
        setAlert(<h1>{name} removed from favorites!</h1>)
      }

      // Back end:
      fetch('http://localhost:3001/favoriteCities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ city: name }),
      })
      .catch(e => console.error('FETCH POST ERROR:', e))
    }

  return (
    <>
      {alert}
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
    </>
  )
}