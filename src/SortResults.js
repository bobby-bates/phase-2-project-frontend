import { useLocation } from 'react-router-dom'
import React from 'react'

export default function SortResults() {
  console.log('abc cities from SortResults:', useLocation().state.sortedCities)
  console.log('cities by dept (single arr) from SortResults:', useLocation().state.citiesByDeptSingleArr)
  console.log('cities by dept (many arrs) from SortResults:', useLocation().state.citiesByDeptManyArrs)
  return (
    <h1>Hi from SortResults</h1>
  )
}
