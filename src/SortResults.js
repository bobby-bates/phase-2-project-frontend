import { useLocation } from 'react-router-dom'
import React from 'react'

export default function SortResults() {
  console.log(useLocation().state.sortedCities)
  return (
    <h1>Hi from SortResults</h1>
  )
}
