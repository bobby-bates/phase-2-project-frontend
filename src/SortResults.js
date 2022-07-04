import { useLocation } from 'react-router-dom'
import React from 'react'

export default function SortResults() {
  const location = useLocation()
  // debugger

  console.log('abc cities from SortResults:', location.state.sortedCities)
  console.log('cities by dept (single arr) from SortResults:', location.state.citiesByDeptSingleArr)
  console.log('cities by dept (many arrs) from SortResults:', location.state.citiesByDeptManyArrs)
  if (location.pathname === '/sort/pop-max-min') {
    console.log('cities by pop max-min from SortResults:', location.state.citiesByPop)
  } else {
    console.log('cities by pop min-max from SortResults:', location.state.citiesByPop)
  }
  return (
    <h1>Hi from SortResults</h1>
  )
}
