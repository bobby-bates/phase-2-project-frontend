import { useLocation } from 'react-router-dom'
import React from 'react'

export default function SortResults() {
  const location = useLocation()
  // debugger

  // if (location.pathname === '/sort/pop-max-min') {
    
  // } else {
    
  // }

  const route = location.pathname

  switch (route) {
    case '/sort/abc':
      console.log('abc cities from SortResults:', location.state.sortedCities)
      break
    case '/sort/departments':
      console.log('cities by dept (single arr) from SortResults:', location.state.citiesByDeptSingleArr)
      console.log('cities by dept (many arrs) from SortResults:', location.state.citiesByDeptManyArrs)
      break
    case '/sort/pop-max-min':
      console.log('cities by pop max-min from SortResults:', location.state.citiesByPop)
      break
    case '/sort/pop-min-max':
      console.log('cities by pop min-max from SortResults:', location.state.citiesByPop)
      break
    default:
      console.log('Switch error!')
  }



  return (
    <h1>Hi from SortResults</h1>
  )
}
